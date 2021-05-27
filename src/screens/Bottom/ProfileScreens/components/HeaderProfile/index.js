import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const HeaderProfile = ({next, canGoBack, setIsVisible}) => {
  const navigation = useNavigation();

  const user = useSelector(state => state.userInfo).data;

  return (
    <Block
      row
      alignCenter
      paddingVertical={70}
      backgroundColor={theme.colors.blueHeader}>
      {canGoBack && (
        <Pressable style={styles.btnback} onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.icoBack} />
        </Pressable>
      )}
      <Block row alignCenter justifyCenter marginHorizontal={12}>
        <Pressable
          borderWidth={4}
          borderColor={theme.colors.smoke}
          borderRadius={50}
          onPress={() => setIsVisible(true)}>
          <Image source={{uri: user?.picture}} style={styles.imgAvatar} />
          <Image
            source={icons.camera}
            style={styles.imgCamera}
            resizeMode="contain"
          />
        </Pressable>
        <Block marginHorizontal={20}>
          <Text size={16} color={theme.colors.white} fontType="bold">
            {user?.full_name}
          </Text>
          <Text size={14} color={theme.colors.white} fontType="semibold">
            {user?.email}
          </Text>
        </Block>
      </Block>
      {next && (
        <Pressable
          onPress={() =>
            navigation.navigate(routes.PROFILE_DETAILS, {user: user})
          }>
          <Image style={styles.imgNext} source={icons.next} />
        </Pressable>
      )}
    </Block>
  );
};

export default HeaderProfile;
