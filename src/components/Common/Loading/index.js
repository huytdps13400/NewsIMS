import {Block} from '@components';
import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import {useSelector} from 'react-redux';

const Loading = ({visible}) => {
  const config = useSelector(state => state.config.data);

  return (
    <Modal visible={visible} transparent={true}>
      <Block flex justifyCenter backgroundColor="rgba(0,0,0,0.2)">
        <ActivityIndicator
          size="large"
          color={config?.general_active_color || '#FF6E4B'}
        />
      </Block>
    </Modal>
  );
};

export default Loading;
