import React, { useContext } from 'react';
import { Button, FlatList, ListRenderItem } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { IResultItem, RepoContext } from '../../../context/RepoContext';
import CardResult from '../../components/CardResult';
import SearchHeader from './SearchHeader';
import { AppRoutes } from '../../../navigation/AppRoutes';
import { RootNavigation } from '../../../navigation/AppNavigation';

const RepoList: React.FC = () => {
  const { updateAuth } = useContext(AuthContext);
  const { state } = useContext(RepoContext);

  const renderResult: ListRenderItem<IResultItem> = ({item}) =>{
    return(
      <CardResult
        id={item.id}
        full_name={item.full_name}
        description={item.description}
        language={item.language}
        stargazers_count={item.stargazers_count}
        html_url={item.html_url}
        onItemPress={(item: IResultItem)=>RootNavigation.navigate(AppRoutes.REPO_VIEW, {details: item})}
      />
    )
  }
  return (
    <React.Fragment>
      <SearchHeader/>
      <FlatList
        data={state?.searchResult}
        renderItem={renderResult}
        keyExtractor={item => item.id.toString()}
      />
    </React.Fragment>
  );
};

export default RepoList;