import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { BASE_API_URL } from '../config/main';

interface IUpdateSearch {
	(searchText: string): void;
}

interface IResultItem {
	title: string,
	description: string,
	language: string,
	stars: number
}

interface IRepoState {
	searchText: string;
	searchResult: Array<IResultItem> | []
}

interface IRepoContext {
	state: IRepoState;
	updateSearch: IUpdateSearch;
}

export const RepoContext = React.createContext<Partial<IRepoContext>>({});

export const RepoProvider = ({ children }: { children: React.ReactNode }) => {
	const [ state, setState ] = useState<IRepoState>({
		searchText: '',
		searchResult: []
	});

	useEffect(()=>{
		//Call Github API on search change
		fetch(`${BASE_API_URL}?q=${state.searchText}&sort=stars&order=desc`, {
			method: "GET",
			headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
			}
		})
		.then((res) => res.json())
		.then((res) => setState({ 
			...state,
			searchResult: res.items
		}));
	},[state.searchText])

	return (
		<RepoContext.Provider
			value={{
				//App Context State
				state,
				//Auth Function
				updateSearch: (searchText: string): void => {
					//Update search value initially
					setState({...state, searchText});
				}
			}}
		>
			{children}
		</RepoContext.Provider>
	);
};
