import { Block } from '@components';
import React from 'react';
import WebView from 'react-native-webview';
import { getHtmlStyles } from 'utils/helper';

const WEBView = ({ data, style, scrollEnabled = true }) => {
  return (
    <Block flex style={style}>
      <WebView
        androidLayerType="hardware"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        scalesPageToFit={false}
        useWebKit={true}
        originWhitelist={['*']}
        source={{
          html: `
          <html>
          <head>
            ${getHtmlStyles()}
          </head>
          <body>
              ${data}
          </body>
          </html>`,
        }}

        injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
      />
    </Block>
  );
};

export default WEBView;
