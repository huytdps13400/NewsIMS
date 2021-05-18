import {Block, Text} from '@components';
import React from 'react';
import {Image, FlatList} from 'react-native';
import ItemVideo from '@components/Common/ItemVideo';
import {getSize, width} from '@utils/responsive';
import {icons} from '@assets';
import ItemNews from '@components/Common/itemNews';
import styles from './styles';
import {theme} from '@theme';

const Offer = ({title, titlevideo, describe, onebox, threebox, list}) => {
  const _renderItem = ({item}) => {
    return <ItemNews />;
  };
  return (
    <Block marginTop={getSize.m(28)}>
      <Block paddingHorizontal={getSize.m(12)}>
        <Block row alignCenter space="between">
          <Text size={getSize.s(20)}>{title}</Text>
          <Block row alignCenter>
            <Text color={'#2B80EF'}>Xem tất cả </Text>
            <Image source={icons.rightarrow} style={styles.icon} />
          </Block>
        </Block>
        <ItemVideo
          style={{marginTop: getSize.m(20)}}
          title={titlevideo}
          describe={describe}
        />
      </Block>
      <Block paddingHorizontal={getSize.m(12)}>
        {onebox && (
          <Block row marginTop={getSize.m(20)}>
            <Image
              source={{
                uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
              }}
              style={{
                width: (width - 36) / 3,
                height: getSize.s(96),
                borderRadius: getSize.s(6),
              }}
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
        )}
        {threebox && (
          <Block marginBottom={getSize.m(10)}>
            <Block row alignCenter marginTop={getSize.m(10)}>
              <Image
                source={{
                  uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
                }}
                style={{
                  width: (width - 36) / 3,
                  height: getSize.s(96),
                  borderRadius: getSize.s(6),
                }}
              />
              <Image
                source={{
                  uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
                }}
                style={{
                  width: (width - 36) / 3,
                  height: getSize.s(96),
                  marginHorizontal: 6,
                  borderRadius: getSize.s(6),
                }}
              />
              <Image
                source={{
                  uri: 'https://afamilycdn.com/150157425591193600/2021/2/22/untitled-161400309107520493853.jpg',
                }}
                style={{
                  width: (width - 36) / 3,
                  height: getSize.s(96),
                  borderRadius: getSize.s(6),
                }}
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
        )}
      </Block>
      {list && (
        <FlatList
          style={{marginHorizontal: getSize.m(12)}}
          data={[1, 2, 3, 4, 5, 6, 7]}
          removeClippedSubviews={true}
          renderItem={_renderItem}
          keyExtractor={item => item}
        />
      )}
    </Block>
  );
};

export default Offer;
