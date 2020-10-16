import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AppRoutes } from '../../../navigation/AppRoutes';
import { IResultItem } from '../../../context/RepoContext';

import styles from './RepoDetailsComponent.style';

type RepoStackParams = {
  [AppRoutes.REPO_LIST]: undefined;
  [AppRoutes.REPO_VIEW]: { details: IResultItem };
};

type RepoRouteProps = RouteProp<RepoStackParams, AppRoutes.REPO_VIEW>;

type RepoNavigationProp = StackNavigationProp<RepoStackParams, AppRoutes.REPO_VIEW>;

type Props = {
  route: RepoRouteProps;
  navigation: RepoNavigationProp;
};

const RepoDetailsComponent: React.FC<Props> = (props: Props) => {
  let { details } = props.route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.full_name}>{details.full_name}</Text>
      <View style={styles.rowStats}>
        <View style={styles.row}>
          <Text style={styles.starsLabel}>Stars</Text>
          <Text style={styles.starsValue}>{details.stargazers_count}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.redirectButton}>
          <Text style={styles.buttonLabel}>Go to repo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RepoDetailsComponent;
