import {icons} from '@assets';
import {Block, Button, CheckBox, FormInput, Text} from '@components';
import {getSize} from '@utils/responsive';
import {useFormikContext} from 'formik';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const LoginForm = ({isLoading}) => {
  const {handleSubmit} = useFormikContext();

  return (
    <Block paddingHorizontal={16} marginTop={10}>
      <FormInput
        name="username"
        iconLeft={icons.auth_user}
        placeholder="Tên đăng nhập"
        style={styles.textInput}
      />
      <FormInput
        isSecure
        name="password"
        iconLeft={icons.auth_password}
        placeholder="Mật khẩu"
        style={styles.textInput}
      />
      <Block row alignCenter space="between">
        <Pressable onPress={() => console.log('test')}>
          <CheckBox
            title="Lưu mật khẩu"
            textStyles={styles.CheckBox}
            iconStyles={{
              marginTop: getSize.m(16),
            }}
          />
        </Pressable>
        <Pressable onPress={() => console.log('test')}>
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
