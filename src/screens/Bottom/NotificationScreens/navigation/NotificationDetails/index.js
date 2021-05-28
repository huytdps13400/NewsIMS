import {Block, Header, Text, WebView} from '@components';
import React from 'react';

const NotificationDetailsScreen = ({route}) => {
  const {date_create, title, content} = route.params;

  return (
    <Block flex backgroundColor={'white'}>
      <Header title="Chi tiết thông báo" canGoBack />
      <Block padding={12}>
        <Text fontType="semibold" size={16}>
          {title}
        </Text>
        <Block row alignCenter marginVertical={10}>
          <Text marginHorizontal={5}>Ngày: {date_create}</Text>
        </Block>
      </Block>
      <Block height={10} backgroundColor="smoke" />
      <Block flex padding={12} paddingBottom={30}>
        <WebView data={content} />
      </Block>
    </Block>
  );
};

export default NotificationDetailsScreen;
