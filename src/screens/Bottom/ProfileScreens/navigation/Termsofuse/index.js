import {Block, Header, WebView} from '@components';
import React from 'react';

const Termsofuse = () => {
  return (
    <Block flex>
      <Header title="Điều khoản sử dụng" cangoBack />
      <WebView
        data={
          'https://zingnews.vn/tphcm-phat-hien-mot-nguoi-duong-tinh-voi-ncov-post1216683.html'
        }
      />
    </Block>
  );
};

export default Termsofuse;
