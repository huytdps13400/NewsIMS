import { icons } from '@assets';
import { Block, Button, Header } from '@components';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import { getSize, width } from '@utils/responsive';
import React from 'react';
import ButtonProfile from './components/ButtonProfile';
import ButtonUtility from './components/ButtonUtility';
import HeaderProfile from './components/HeaderProfile';
import styles from './styles';
const ProfileScreens = () => {
  const navigation = useNavigation();
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
        padding={getSize.m(12)}

        marginHorizontal={getSize.m(12)}
        radius={5}
        backgroundColor="white"
        space={'between'}
        style={styles.container}>
        <ButtonProfile
          image={icons.new}
          title={'Tin hệ thống'}
          onPress={() => navigation.navigate(routes.SYSTEMNEWS)}
        />
        <ButtonProfile
          image={icons.notification2}
          title={'Tin đọc nhiều'}
          onPress={() => navigation.navigate(routes.POPULARNEWS)}
        />
        <ButtonProfile
          image={icons.seen}
          title={'Tin đã xem'}
          onPress={() => navigation.navigate(routes.SEENRNEWS)}
        />
      </Block>
      <Block paddingHorizontal={12} marginTop={70}>
        <ButtonUtility icon={icons.profile1} title={'Bật thông báo'} check />

        <ButtonUtility
          icon={icons.profile2}
          title={'Tự động phát video'}
          check
        />
        <ButtonUtility icon={icons.profile3} title={'Gửi phản hồi'} />
        <ButtonUtility
          icon={icons.profile4}
          title={'Điều khoản sử dụng'}
          onPress={() => navigation.navigate(routes.TERMSOFUSE)}
        />
        <ButtonUtility
          icon={icons.profile5}
          title={'Phiên bản hiện tại 10.8'}
        />
        <Button title={'Đăng xuất'} />
      </Block>
    </Block>
  );
};

export default ProfileScreens;
