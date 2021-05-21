import { Block, Text } from '@components';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/core';
import { theme } from '@theme';
import { getSize } from '@utils/responsive';
import React from 'react';
import { Image, Pressable } from 'react-native';
import styles from './styles';

const itemNews = React.memo(
  ({ item_id, group_id, picture, date_update, title, short, thumbnail }) => {
    const navigation = useNavigation();
    return (
      <Block marginTop={getSize.m(18)}>
        <Pressable
          onPress={() => navigation.navigate(routes.NEWSDETAILS, {
            item_id,
          })}>
          <Block row>
            <Image
              source={{
                uri: picture,
              }}
              style={styles.styleimg}
            />
            <Block flex marginLeft={getSize.m(15)}>
              <Text numberOfLines={2} marginTop={getSize.m(2)}>
                {title}
              </Text>
              <Text
                numberOfLines={2}
                marginTop={getSize.m(20)}
                color={theme.colors.lightGray}>
                {date_update}
              </Text>
            </Block>
          </Block>
        </Pressable>
        <Block backgroundColor={theme.colors.smoke} height={1} marginTop={12} />
      </Block>
    );
  },
);

export default itemNews;