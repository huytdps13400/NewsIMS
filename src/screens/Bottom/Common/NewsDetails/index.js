import {Block, Header, WebView} from '@components';
import React from 'react';

const NewsDetails = () => {
  return (
    <Block flex>
      <Header title="Chi tiết tin tức" cangoBack />
      <WebView
        data={
          'https://vietnamnet.vn/vn/suc-khoe/tp-hcm-than-toc-xet-nghiem-6-000-cu-dan-noi-co-ca-duong-tinh-covid-19-737787.html'
        }
      />
    </Block>
  );
};

export default NewsDetails;
