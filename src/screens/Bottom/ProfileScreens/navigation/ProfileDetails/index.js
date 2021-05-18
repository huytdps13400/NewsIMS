import React from 'react';
import {Image} from 'react-native';
import {Header, Block, Button, Text} from '@components';
import HeaderProfile from '../../components/HeaderProfile';
import ButtonInfo from '../../components/ButtonInfo';
import {icons} from '@assets';
import {width} from '@utils/responsive';

const ProfileDetails = () => {
  return (
    <Block>
      <Header />
      <HeaderProfile />
      <Block
        shadow
        flex
        justifyCenter
        paddingHorizontal={30}
        radius={17}
        width={width - 22}
        space={'between'}
        style={{position: 'absolute', top: 160, alignSelf: 'center'}}
        backgroundColor={'#fff'}>
        <Block row justifyCenter space={'between'} marginTop={20}>
          <Text size={16} fontType={'bold'}>
            Thông tin hồ sơ của bạn
          </Text>
          <Image style={{width: 17, height: 17}} source={icons.edit}></Image>
        </Block>
        <ButtonInfo icon={icons.profile6} title={'Giớt tính: Nam'} />
        <ButtonInfo icon={icons.profile7} title={'Ngày sinh: 29/05/1991'} />
        <ButtonInfo icon={icons.profile8} title={'Thành phố: Hồ Chí Minh'} />
        <ButtonInfo icon={icons.profile9} title={'Điện thoại: 034 397 3451'} />
        <ButtonInfo
          icon={icons.profile10}
          title={'Tình trạng hôn nhân: Độc thân'}
        />
        <Button
          style={{marginTop: 45, marginBottom: 30}}
          title={'Cập nhật tài khoản'}
        />
      </Block>
    </Block>
  );
};

export default ProfileDetails;
