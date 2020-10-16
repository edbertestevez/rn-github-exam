import React, { useContext } from 'react';
import { Text, Button, FlatList, ListRenderItem } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { IResultItem, RepoContext } from '../../../context/RepoContext';
import CardResult from '../../components/CardResult';
import SearchHeader from './SearchHeader';
import * as RootNavigation from '../../../navigation/RootNavigation';
import { AppRoutes } from '../../../navigation/AppRoutes';

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
        onItemPress={(item: IResultItem)=>console.log("Redirect to view screen", item)}
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
      <Button title={"LOGOUT"} onPress={()=>updateAuth?.(false)}/>
    </React.Fragment>
  );
};

export default RepoList;