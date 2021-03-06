import {icons} from '@assets';
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderHome = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block backgroundColor={theme.colors.blueHeader}>
      <Block paddingTop={top + 10} paddingHorizontal={12}>
        <Block row alignCenter width={'100%'}>
          <Image source={icons.logoims} style={styles.logo} />
          <Block row alignCenter width={'80%'} space="between">
            <Block
              row
              alignCenter
              radius={17}
              height={28}
              paddingHorizontal={12}
              marginLeft={15}
              width={'80%'}
              backgroundColor="white">
              <Text color={theme.colors.lightGray} size={12}>
                Tìm kiếm...
              </Text>
            </Block>
            <Image source={icons.search} style={styles.icoSearch} />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const HeaderCommon = ({title, canGoBack}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Block backgroundColor={theme.colors.blueHeader}>
      <Block
        row
        alignCenter
        paddingTop={top + 10}
        paddingHorizontal={12}
        paddingVertical={16}
        space="between">
        {canGoBack && (
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={icons.back} style={styles.icoBack} />
          </Pressable>
        )}

        {title && (
          <Text
            flex
            center
            size={17}
            fontType="semibold"
            color={theme.colors.white}>
            {title}
          </Text>
        )}
      </Block>
    </Block>
  );
};

export default Header;
