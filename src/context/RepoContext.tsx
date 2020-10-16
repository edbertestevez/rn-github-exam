import React, { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';
import { BASE_API_URL } from '../config/main';

interface IUpdateSearch {
	(searchText: string): void;
}

interface IRepoState {
	searchText: string;
	searchResult: Array<IResultItem> | [];
}

interface IRepoContext {
	state: IRepoState;
	updateSearch: IUpdateSearch;
}

interface IRepoPress {
	(props: IResultItem): void;
}

export interface IResultItem {
	id: number
	full_name: string;
	description: string;
	language: string;
	stargazers_count?: number;
	html_url: string,
	onItemPress: IRepoPress
}

export const RepoContext = React.createContext<Partial<IRepoContext>>({});

export const RepoProvider = ({ children }: { children: React.ReactNode }) => {
	const [ state, setState ] = useState<IRepoState>({
		searchText: '',
		searchResult: []
	});

	const debouncedFetchResult = useCallback(
		_.debounce((search) => {
			console.log("Fetching = ", search)
			//Call Github API on search change
			fetch(`${BASE_API_URL}?q=${search}&sort=stars&order=desc`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			})
				.then((res) => res.json())
				.then((res) =>
					setState({
						...state,
						searchText: search,
						searchResult: res.items
					})
				);
		}, 500),
		[]
	);

	useEffect(
		() => {
			debouncedFetchResult(state.searchText);
		},
		[ state.searchText ]
	);

	return (
		<RepoContext.Provider
			value={{
				//Repo Context State
				state,
				//Search Function
				updateSearch: (searchText: string): void => {
					setState({ ...state, searchText });
				}
			}}
		>
			{children}
		</RepoContext.Provider>
	);
};
