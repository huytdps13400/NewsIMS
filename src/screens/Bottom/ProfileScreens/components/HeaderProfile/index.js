import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const HeaderProfile = ({next, canGoBack}) => {
  const navigation = useNavigation();
  const user = useSelector(state => state.userInfo).data;

  return (
    <Block row alignCenter paddingVertical={70} backgroundColor="#0088EE">
      {canGoBack && (
        <Pressable style={styles.btnback} onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.icoBack} />
        </Pressable>
      )}
      <Block row alignCenter justifyCenter marginHorizontal={12}>
        <Block
          borderWidth={4}
          borderColor="smoke"
          backgroundColor="red"
          radius={50}
          justifyCenter>
          <Image source={{uri: user?.picture}} style={styles.imgAvatar} />
          <Image source={icons.camera} style={styles.imgCamera} />
        </Block>
        <Block marginHorizontal={20}>
          <Text size={16} color={'#fff'} fontType="bold">
            {user?.full_name}
          </Text>
          <Text size={14} color={'#fff'} fontType="semibold">
            {user?.email}
          </Text>
        </Block>
      </Block>
      {next ? (
        <Pressable
          onPress={() =>
            navigation.navigate(routes.PROFILE_DETAILS, {user: user})
          }>
          <Image style={styles.imgNext} source={icons.next} />
        </Pressable>
      ) : null}
    </Block>
  );
};

export default HeaderProfile;
