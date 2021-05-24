import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize, height} from '@utils/responsive';
import {Formik} from 'formik';
import React from 'react';
import {Image, Keyboard, Platform, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'redux/actions';
import LoginForm from '../components/LoginForm';
import LoginSocialButton from './../components/LoginSocialButtom';
import {loginValidate} from './validation';

const INITIAL_VALUES = {username: '', password: ''};

const LoginScreen = ({callback}) => {
  const dispatch = useDispatch();
  const {device_token, device_name} = useSelector(state => state.device);
  const {isLoading} = useSelector(state => state.login);

  const _onSubmit = values => {
    Keyboard.dismiss();
    dispatch({
      type: actions.LOGIN_ACCOUNT,
      body: {
        username: values.username,
        password: values.password,
        device_token,
        device_name,
      },
    });
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={_onSubmit}
      validationSchema={loginValidate}>
      <Block
        backgroundColor="background"
        marginTop={height / 6}
        marginHorizontal={20}
        borderRadius={20}
        marginBottom={20}>
        <Block backgroundColor="white" radius={20}>
          <Block alignCenter marginTop={30}>
            <Block>
              <Image
                source={icons.logoAuth}
                style={{
                  width: getSize.s(155),
                  height: getSize.s(104),
                }}
                resizeMode={'contain'}
              />
            </Block>
            <Text size={18} color="blue" fontType="semibold">
              ĐĂNG NHẬP
            </Text>
            <Text color={theme.colors.placeholder} marginTop={15}>
              Chào mừng đến với chúng tôi
            </Text>
          </Block>
          <LoginForm isLoading={isLoading} />
          <Text center color={theme.colors.placeholder}>
            Hãy đăng nhập với
          </Text>
          <Block
            row
            alignCenter
            justifyCenter
            marginHorizontal={16}
            marginVertical={16}>
            <LoginSocialButton
              backgroundColor="#3B5998"
              color="white"
              icon={icons.facebook}
              // onPress={handleLoginFacebook}
            />
            <LoginSocialButton
              backgroundColor="#FFFFFF"
              color="black"
              icon={icons.google}
              // onPress={handleLoginGoogle}
            />
            {Platform.OS === 'ios' ? (
              <LoginSocialButton
                backgroundColor="#000000"
                color="white"
                icon={icons.apple}
                // onPress={handleLoginApple}
              />
            ) : null}
          </Block>
          <Block row alignCenter justifyCenter paddingBottom={16}>
            <Pressable flexDirection="row" onPress={callback}>
              <Text size={12} fontType="semibold">
                Bạn chưa có tài khoảng ?{'   '}
              </Text>
              <Text size={12} color="blue" fontType="semibold">
                Đăng ký ngay
              </Text>
            </Pressable>
          </Block>
        </Block>
      </Block>
    </Formik>
  );
};

export default LoginScreen;
