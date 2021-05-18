import React from 'react';
import {Image, Pressable} from 'react-native';
import {Block, Text} from '@components';
import {getSize} from '@utils/responsive';
import {icons, images} from '@assets';
import styles from './styles';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
const HeaderProfile = ({next}) => {
  const navigation = useNavigation();
  return (
    <Block
      alignCenter
      justifyCenter
      row
      paddingHorizontal={33}
      paddingBottom={getSize.m(80)}
      space={'between'}
      backgroundColor={'#0088EE'}
      style={styles.header}>
      <Block row justifyCenter space={'between'}>
        <Block justifyCenter space={'between'}>
          <Image source={icons.avatar} style={styles.imgAvatar}></Image>
          <Image source={icons.camera} style={styles.imgCamera}></Image>
        </Block>
        <Block marginLeft={14} paddingVertical={6}>
          <Text size={16} color={'#fff'} fontType={'bold'}>
            Lê Ngọc Luân
          </Text>
          <Text size={14} color={'#fff'} fontType={'Semibold'}>
            lengocluan1991@gmail.com
          </Text>
        </Block>
      </Block>
      {next ? (
        <Pressable onPress={() => navigation.navigate(routes.PROFILEDETAILS)}>
          <Image style={styles.imgNext} source={icons.next}></Image>
        </Pressable>
      ) : null}
    </Block>
  );
};

export default HeaderProfile;
