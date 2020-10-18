import React from 'react';
import {View, Text} from 'react-native';
import flexStyles from '../../styles/flexStyles';

type Props = {
  label?: string;
};

const EmptyList: React.FC<Props> = (props: Props) => {
  return (
    <View style={flexStyles.flexCenter}>
      <Text>{props.label ?? 'No records found'}</Text>
    </View>
  );
};

export default EmptyList;
