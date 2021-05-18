import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize, height} from '@utils/responsive';
import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';
import PolicyModal from '../components/PolicyModal';
import SignUpForm from '../components/SignUpForm';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Theo dõi',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Đề xuất',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Xã hội',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Thế giới',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d82',
    title: 'Bóng đá việt nam',
  },
];

const SignupScreen = ({callback}) => {
  const [modalPolicy, setModalPolicy] = useState(false);
  const [checkPolicy, setCheckPolicy] = useState(false);
  return (
    <Block
      marginTop={height / 6}
      marginBottom={20}
      marginHorizontal={20}
      // opacity={modalPolicy ? 0 : 1}
    >
      <Block backgroundColor="white" radius={20}>
        <Block alignCenter marginTop={30}>
          <Image
            source={icons.logoAuth}
            style={{
              width: getSize.s(155),
              height: getSize.s(104),
            }}
            resizeMode={'contain'}
          />
          <Text size={18} color="blue" fontType={'semibold'}>
            ĐĂNG KÝ
          </Text>
          <Text color={theme.colors.placeholder} marginTop={15}>
            Chào mừng đến với chúng tôi
          </Text>
        </Block>
        <SignUpForm
          checkPolicy={checkPolicy}
          setModalPolicy={() => {
            setModalPolicy(true);
          }}
        />

        <Block row alignCenter justifyCenter paddingBottom={16}>
          <Text center size={12}>
            Bạn đã có tài khoản
          </Text>
          <Pressable onPress={callback}>
            <Text size={12} color="blue" fontType={'semibold'}>
              Đăng nhập ngay
            </Text>
          </Pressable>
        </Block>
        <PolicyModal
          visible={modalPolicy}
          data={data?.content}
          onPress={() => {
            setModalPolicy(false);
            setCheckPolicy(true);
          }}
        />
      </Block>
    </Block>
  );
};

export default SignupScreen;
