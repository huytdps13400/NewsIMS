import {Block, Text} from '@components';
import {height, width} from '@utils/responsive';
import React from 'react';
import {Modal, Pressable, ScrollView} from 'react-native';

const PolicyModal = ({visible, data, onPress}) => {
  return (
    <Modal animationType={'slide'} visible={visible} transparent={true}>
      <Block flex justifyCenter alignCenter>
        <Block
          height={height * 0.8}
          width={width - 40}
          borderRadius={20}
          backgroundColor="background"
          justifyCenter>
          <Block flex padding={20}>
            <ScrollView>
              <Text paddingLeft={16} paddingTop={5}>
                {data}
              </Text>
            </ScrollView>
          </Block>
          <Pressable
            alignItems="center"
            justifyContent="center"
            height={45}
            borderRadius={45}
            margin={20}
            backgroundColor={'blue'}
            onPress={onPress}>
            <Text marginRight={10} fontType="semibold" color="black">
              ĐÒNG Ý
            </Text>
          </Pressable>
        </Block>
      </Block>
    </Modal>
  );
};

export default PolicyModal;
