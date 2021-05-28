import {Block} from '@components';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

const LoadMore = () => {
  const config = useSelector(state => state.config.data);

  return (
    <Block marginBottom={20} marginTop={10}>
      <ActivityIndicator
        size="small"
        color={config?.general_active_color || '#FF6E4B'}
      />
    </Block>
  );
};

export default LoadMore;
