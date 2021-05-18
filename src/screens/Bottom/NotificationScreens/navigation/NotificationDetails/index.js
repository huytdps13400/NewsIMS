import React from 'react';
import {Block, Text, Header, WebView} from '@components';

const NotificationDetails = () => {
  return (
    <Block flex>
      <Header title="Chi tiết thông báo" cangoBack />
      <WebView
        data={
          'https://zingnews.vn/tphcm-phat-hien-mot-nguoi-duong-tinh-voi-ncov-post1216683.html'
        }
      />
    </Block>
  );
};

export default NotificationDetails;
