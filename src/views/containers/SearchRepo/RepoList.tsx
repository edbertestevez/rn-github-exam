import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, Text } from 'react-native';
import { IResultItem, RepoContext } from '../../../context/RepoContext';
import CardResult from '../../components/CardResult';
import SearchHeader from './SearchHeader';
import { AppRoutes } from '../../../navigation/AppRoutes';
import { RootNavigation } from '../../../navigation/AppNavigation';
import { AppColors } from '../../../constants/AppColors';

const RepoList: React.FC = () => {
  const { state, updatePagination, isLoading } = useContext(RepoContext);

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

  const onPagination = () =>{
    if(state?.searchPage){
      updatePagination?.(state.searchPage + 1);
    }
  }
  
  return (
    <React.Fragment>
      <SearchHeader/>

      <Text style={{fontSize: 20}}>{state?.searchPage}</Text>
      {isLoading ? (
        <ActivityIndicator size={32} color={AppColors.BLUE}/>
      ) : (
        <FlatList
          data={state?.searchResult}
          renderItem={renderResult}
          keyExtractor={item => item.id.toString()}
          onEndReached={onPagination}
          showsVerticalScrollIndicator={false}
        />
      )}
      
    </React.Fragment>
  );
};

export default RepoList;