import {icons} from '@assets';
import {Block, Text} from '@components';
import ItemNews from '@components/Common/itemNews';
import ItemVideo from '@components/Common/ItemVideo';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import styles from './styles';

const Tendency = ({
  title,
  titlevideo,
  describe,
  onebox,
  threebox,
  list,
  listtext,
  style,
}) => {
  const navigation = useNavigation();

  const _renderItem = () => <ItemNews />;

  const _renderItemBox = ({item, index}) => {
    return (
      <Block flex>
        <Block
          height={index === 0 ? 0 : 2}
          marginTop={10}
          backgroundColor={theme.colors.smoke}
          width={width}
        />
        <Block row alignCenter marginTop={10}>
          <Block justifyCenter>
            <Text color={theme.colors.blueHeader}>1.</Text>
          </Block>

          <Block flex marginLeft={5}>
            <Text size={17} numberOfLines={2}>
              Sự cố metro số 1: Nhà thầu thừa nhận dung sai gối không đạt yêu
              cầu
            </Text>
            <Text color={theme.colors.lightGray} marginTop={10}>
              Tin thế giới - 1 giờ
            </Text>
          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <Block marginTop={28}>
      <Block paddingHorizontal={12}>
        {title && (
          <Block row alignCenter space="between">
            <Text size={20}>{title}</Text>
            <Block row alignCenter>
              <Text color={theme.colors.blueHeader}>Xem tất cả </Text>
              <Image
                source={icons.rightarrow}
                style={styles.icon}
                resizeMode="contain"
              />
            </Block>
          </Block>
        )}
        <ItemVideo title={titlevideo} describe={describe} style={style} />
      </Block>
      <Block paddingHorizontal={12}>
        {onebox && (
          <Pressable onPress={() => navigation.navigate(routes.NEWS_DETAILS)}>
            <Block row marginTop={20}>
              <Image
                source={{
                  uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
                }}
                style={styles.imgstyle}
              />
              <Block flex marginLeft={14}>
                <Text numberOfLines={3} size={16}>
                  Người đàn ông chi hơn 9 tỷ đồng mang nguyên căn nhà đến nơi ở
                  mới
                </Text>
                <Text color={theme.colors.lightGray} marginTop={20}>
                  Tin hot 1 giờ
                </Text>
              </Block>
            </Block>
          </Pressable>
        )}
        {threebox && (
          <Pressable onPress={() => navigation.navigate(routes.NEWS_DETAILS)}>
            <Block marginBottom={10}>
              <Block row alignCenter marginTop={10}>
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
              <Text marginTop={16} size={16}>
                BTS vượt qua Taylor Swift đứng đầu bảng xếp hạng về đĩa cứng thế
                giới
              </Text>
              <Text marginTop={20} color={theme.colors.lightGray}>
                Tin hot 1 giờ
              </Text>
            </Block>
          </Pressable>
        )}
      </Block>
      {list && (
        <Block marginHorizontal={12}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            removeClippedSubviews={true}
            renderItem={_renderItem}
            keyExtractor={item => item}
          />
        </Block>
      )}
      {listtext && (
        <Block marginHorizontal={12}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            removeClippedSubviews={true}
            renderItem={_renderItemBox}
            keyExtractor={item => item}
          />
        </Block>
      )}
    </Block>
  );
};

export default Tendency;
