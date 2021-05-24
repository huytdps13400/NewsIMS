import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
const HeaderProfile = ({next}) => {
  const navigation = useNavigation();
  return (
    <Block
      alignCenter
      justifyCenter
      row
      paddingHorizontal={33}
      paddingBottom={getSize.m(80)}
      space="between"
      backgroundColor="#0088EE">
      <Block row justifyCenter space={'between'}>
        <Block justifyCenter space={'between'}>
          <Image source={icons.avatar} style={styles.imgAvatar} />
          <Image source={icons.camera} style={styles.imgCamera} />
        </Block>
        <Block marginLeft={14} paddingVertical={6}>
          <Text size={16} color={'#fff'} fontType="bold">
            Lê Ngọc Luân
          </Text>
          <Text size={14} color={'#fff'} fontType="semibold">
            lengocluan1991@gmail.com
          </Text>
        </Block>
      </Block>
      {next ? (
        <Pressable onPress={() => navigation.navigate(routes.PROFILEDETAILS)}>
          <Image style={styles.imgNext} source={icons.next} />
        </Pressable>
      ) : null}
    </Block>
  );
};

export default HeaderProfile;
