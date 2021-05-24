import {icons} from '@assets';
import {Block, Button, CheckBox, FormInput, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {useFormikContext} from 'formik';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {routes} from '@navigation/routes';

const LoginForm = ({isLoading}) => {
  const navigation = useNavigation();
  const {handleSubmit} = useFormikContext();
  const [togglePass, setTogglePass] = useState('');

  return (
    <Block paddingHorizontal={16} marginTop={10}>
      <FormInput
        name="username"
        iconLeft={icons.auth_user}
        placeholder="Tên đăng nhập"
        style={styles.textInput}
        errorTextStyles={styles.errorStyles}
      />
      <FormInput
        isSecure
        name="password"
        iconLeft={icons.auth_password}
        placeholder="Mật khẩu"
        style={styles.textInput}
        errorTextStyles={styles.errorStyles}
      />
      <Block row alignCenter space="between">
        <Block
          row
          alignCenter
          marginTop={15}
          padding={12}
          marginBottom={1}
          backgroundColor="white">
          <CheckBox
            title="Lưu mật khẩu"
            value={togglePass}
            setValue={setTogglePass}
          />
        </Block>

        <Pressable
          onPress={() => navigation.navigate(routes.FOR_GET_PASS_SCREEN)}>
          <Text center size={12} marginTop={16}>
            Bạn quên mật khẩu
          </Text>
        </Pressable>
      </Block>
      <Button title="Đăng nhập" onPress={handleSubmit} disabled={isLoading} />
    </Block>
  );
};

export default LoginForm;
