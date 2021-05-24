import {icons} from '@assets';
import {Block, Text} from '@components';
import ItemNews from '@components/Common/itemNews';
import ItemVideo from '@components/Common/ItemVideo';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import styles from './styles';

const Offer = ({title, titlevideo, describe, onebox, threebox, list}) => {
  const _renderItem = ({item}) => {
    return <ItemNews />;
  };
  const navigation = useNavigation();

  return (
    <Block marginTop={getSize.m(28)}>
      <Block paddingHorizontal={getSize.m(12)}>
        <Block row alignCenter space="between">
          <Text size={getSize.s(20)}>{title}</Text>
          <Pressable onPress={() => navigation.navigate(routes.ALLNEWSSCREEN)}>
            <Block row alignCenter>
              <Text color={'#2B80EF'}>Xem tất cả </Text>
              <Image source={icons.rightarrow} style={styles.icon} />
            </Block>
          </Pressable>
        </Block>
        <ItemVideo
          style={{marginTop: getSize.m(20)}}
          title={titlevideo}
          describe={describe}
        />
      </Block>
      <Block paddingHorizontal={getSize.m(12)}>
        {onebox && (
          <Pressable onPress={() => navigation.navigate(routes.NEWS_DETAILS)}>
            <Block row marginTop={getSize.m(20)}>
              <Image
                source={{
                  uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
                }}
                style={styles.imgstyle}
              />
              <Block flex marginLeft={getSize.m(14)}>
                <Text numberOfLines={3} size={getSize.s(16)}>
                  Người đàn ông chi hơn 9 tỷ đồng mang nguyên căn nhà đến nơi ở
                  mới
                </Text>
                <Text color={theme.colors.lightGray} marginTop={getSize.m(20)}>
                  Tin hot 1 giờ
                </Text>
              </Block>
            </Block>
          </Pressable>
        )}
        {threebox && (
          <Pressable onPress={() => navigation.navigate(routes.NEWS_DETAILS)}>
            <Block marginBottom={getSize.m(10)}>
              <Block row alignCenter marginTop={getSize.m(10)}>
                <Image
                  source={{
                    uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
                  }}
                  style={styles.imgstyle}
                />
                <Image
                  source={{
                    uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
                  }}
                  style={[styles.imgstyle, {marginHorizontal: getSize.m(6)}]}
                />
                <Image
                  source={{
                    uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
                  }}
                  style={styles.imgstyle}
                />
              </Block>
              <Text marginTop={getSize.m(16)} size={getSize.s(16)}>
                BTS vượt qua Taylor Swift đứng đầu bảng xếp hạng về đĩa cứng thế
                giới
              </Text>
              <Text marginTop={getSize.m(20)} color={theme.colors.lightGray}>
                Tin hot 1 giờ
              </Text>
            </Block>
          </Pressable>
        )}
      </Block>

      {list && (
        <Block marginHorizontal={getSize.m(12)}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            removeClippedSubviews={true}
            renderItem={_renderItem}
            keyExtractor={item => item}
          />
        </Block>
      )}
    </Block>
  );
};

export default Offer;
