import {icons} from '@assets';
import {Block, Button, FormInput, Text} from '@components';
import {useFormikContext} from 'formik';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const SignUpForm = ({isLoading, setModalPolicy, checkPolicy}) => {
  const {handleSubmit} = useFormikContext();

  return (
    <Block marginHorizontal={16} marginTop={10}>
      <FormInput
        name="full_name"
        iconLeft={icons.auth_user}
        placeholder="Tên đăng nhập"
        style={styles.textInput}
      />
      <FormInput
        name="email"
        iconLeft={icons.auth_email}
        placeholder="Nhập email của bạn"
        style={styles.textInput}
      />
      <FormInput
        name="phone"
        iconLeft={icons.auth_email}
        placeholder="Nhập số điện thoại"
        style={styles.textInput}
      />
      <FormInput
        isSecure
        name="password"
        iconLeft={icons.auth_password}
        placeholder="Mật khẩu"
        style={styles.textInput}
      />
      <FormInput
        isSecure
        name="rePassword"
        iconLeft={icons.auth_password}
        placeholder="Nhập lại mật khẩu"
        style={styles.textInput}
      />

      <Pressable onPress={setModalPolicy}>
        <Text size={12} center marginTop={16}>
          Đăng ký là bạn đã chấp nhận
          <Text size={12} color="blue" fontType="semibold">
            Điều khoản sử dụng
          </Text>
        </Text>
      </Pressable>

      <Button
        title="ĐĂNG KÝ"
        onPress={checkPolicy ? handleSubmit : setModalPolicy}
        disabled={isLoading}
      />
    </Block>
  );
};

export default SignUpForm;
