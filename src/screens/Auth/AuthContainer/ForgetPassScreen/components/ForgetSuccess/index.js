import {icons} from '@assets';
import {Block, Button, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ForgetSuccess = ({email}) => {
  const navigation = useNavigation();
  return (
    <Block flex padding={12} marginTop={12} backgroundColor="background">
      <Block flex>
        <Image style={styles.iconCheck} source={icons.check_mark} />

        <Text center color="green">
          Email đã được gửi
        </Text>

        <Block row marginVertical={15}>
          <Block
            width={8}
            height={8}
            radius={8}
            marginTop={5}
            marginRight={8}
            backgroundColor="red"
          />
          <Block flex>
            <Text color="placeholder">
              Email hướng dẫn tạo mật khẩu đã được gửi đến địa chỉ {email}. Hãy
              kiểm tra email và làm theo hướng dẫn.
            </Text>
          </Block>
        </Block>

        <Block row marginBottom={10}>
          <Block
            width={8}
            height={8}
            radius={8}
            marginTop={5}
            marginRight={8}
            backgroundColor="red"
          />
          <Block flex>
            <Text color="placeholder">
              Nếu không thấy email trong họp thư đến (Inbox). Vui lòng kiểm tra
              họp thư Spam hoặc Junk Folder.
            </Text>
          </Block>
        </Block>
      </Block>

      <Button
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: routes.BOTTOM_TAB}],
          });
        }}
        style={styles.button}
        title="TIẾP TỤC ĐỌC TIN"
      />
    </Block>
  );
};

export default ForgetSuccess;
