import {icons} from '@assets';
import {Block, Button, Header} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import {getSize, width} from '@utils/responsive';
import Storage from '@utils/storage';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ButtonProfile from './components/ButtonProfile';
import ButtonUtility from './components/ButtonUtility';
import {DataMenu, Data} from './components/DataProfile';
import HeaderProfile from './components/HeaderProfile';
import styles from './styles';

const ProfileScreens = () => {
  const navigation = useNavigation();
  const {isLoading} = useSelector(state => state.logOut);
  const dispatch = useDispatch();

  const _handleLogOut = () => {
    Storage.getItem('TOKEN_USER').then(tokenUser => {
      dispatch({
        type: actions.LOGOUT_ACCOUNT,
        params: {
          user: tokenUser,
        },
      });
    });
  };

  const _renderMenu = (item, index) => (
    <ButtonProfile
      image={item.image}
      title={item.title}
      onPress={() => navigation.navigate(item.navigation)}
    />
  );
  const _renderItem = (item, index) => (
    <ButtonUtility
      icon={item.image}
      title={item.title}
      check={item.params}
      onPress={() => navigation.navigate(item.navigation)}
    />
  );

  return (
    <Block flex backgroundColor={'#fff'}>
      <Header />
      <HeaderProfile next />
      <Block
        shadow
        row
        flex
        alignCenter
        justifyCenter
        width={width - 24}
        padding={12}
        radius={5}
        backgroundColor="white"
        space={'between'}
        style={styles.container}>
        {DataMenu.map(_renderMenu)}
      </Block>
      <Block paddingHorizontal={12} marginTop={70}>
        {Data.map(_renderItem)}
        <Button
          style={styles.btnLogout}
          title={'ĐĂNG XUẤT'}
          onPress={() => _handleLogOut()}
          disabled={isLoading}
        />
      </Block>
    </Block>
  );
};

export default ProfileScreens;
