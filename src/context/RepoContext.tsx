import React, {useEffect, useState, useCallback} from 'react';
import _ from 'lodash';
import {BASE_API_URL} from '../config/main';

interface IUpdateSearch {
  (searchText: string): void;
}

interface IUpdatePagination {
  (searchPage: number): void;
}

interface IRepoState {
  searchPage: number;
  searchText: string;
  searchResult: Array<IResultItem> | [];
}

interface IRepoContext {
  state: IRepoState;
  isLoading: boolean;
  updateSearch: IUpdateSearch;
  updatePagination: IUpdatePagination;
}

interface IRepoPress {
  (props: IResultItem): void;
}

export interface IResultItem {
  id: number;
  full_name: string;
  description: string;
  language: string;
  stargazers_count?: number;
  html_url: string;
  onItemPress: IRepoPress;
}

export const RepoContext = React.createContext<Partial<IRepoContext>>({});

export const RepoProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPaginating, setIsPaginating] = useState(false);
  const [state, setState] = useState<IRepoState>({
    searchText: '',
    searchResult: [],
    searchPage: 1,
  });
  const [prevSearch, setPrevSearch] = useState('');

  const fetchResults = useCallback(
    (text: string, page: number, retain?: boolean) => {
      console.log('Fetching = ', text, page);
      let isInitial = page === 1;

      //Call Github API on search change
      fetch(`${BASE_API_URL}?q=${text}&sort=stars&order=desc&page=${page}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setState((prevState) => ({
            ...prevState,
            searchPage: page,
            searchText: retain === true ? prevState.searchText : text,
            searchResult: isInitial
              ? res.items
              : [...prevState.searchResult, ...res.items],
          }));

          if (retain) {
            setPrevSearch(text);
          }

          setIsLoading(false);
          setIsPaginating(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsPaginating(false);
        });
    },
    [],
  );

  const debounceSearch = useCallback(
    _.debounce((text, page) => {
      fetchResults(text, page);
    }, 1000),
    [],
  );

  useEffect(() => {
    setIsLoading(true);
    debounceSearch(state.searchText, 1);
  }, [state.searchText, debounceSearch]);

  useEffect(() => {
    setIsPaginating(true);
    fetchResults(prevSearch, state.searchPage, true);
  }, [state.searchPage, prevSearch, fetchResults]);

  return (
    <RepoContext.Provider
      value={{
        //Repo Context State
        state,
        isLoading,
        //Search Function
        updateSearch: (searchText: string): void => {
          setState({...state, searchText, searchPage: 1});
        },
        //Paginaion Function
        updatePagination: (searchPage: number): void => {
          if (!isPaginating) {
            setState({...state, searchPage});
          }
        },
      }}>
      {children}
    </RepoContext.Provider>
  );
};
