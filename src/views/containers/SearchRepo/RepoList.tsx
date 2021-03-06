import React, {useContext} from 'react';
import {ActivityIndicator, FlatList, ListRenderItem} from 'react-native';
import {IResultItem, RepoContext} from '../../../context/RepoContext';
import CardResult from '../../components/CardResult';
import SearchHeader from './SearchHeader';
import {AppRoutes} from '../../../navigation/AppRoutes';
import {RootNavigation} from '../../../navigation/AppNavigation';
import {AppColors} from '../../../constants/AppColors';
import EmptyList from '../../components/EmptyList';

const RepoList: React.FC = () => {
  const {state, updatePagination, isLoading} = useContext(RepoContext);

  const renderResult: ListRenderItem<IResultItem> = ({item}) => {
    return (
      <CardResult
        id={item.id}
        full_name={item.full_name}
        description={item.description}
        language={item.language}
        stargazers_count={item.stargazers_count}
        html_url={item.html_url}
        onItemPress={(record: IResultItem) => {
          RootNavigation.navigate(AppRoutes.REPO_VIEW, {details: record});
        }}
      />
    );
  };

  const onPagination = () => {
    if (state?.searchPage) {
      updatePagination?.(state.searchPage + 1);
    }
  };

  return (
    <React.Fragment>
      <SearchHeader />

      {isLoading ? (
        <ActivityIndicator size={32} color={AppColors.BLUE} />
      ) : (
        <FlatList
          data={state?.searchResult}
          ListEmptyComponent={<EmptyList />}
          renderItem={renderResult}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={onPagination}
          showsVerticalScrollIndicator={false}
        />
      )}
    </React.Fragment>
  );
};

export default RepoList;
