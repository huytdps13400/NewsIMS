/* eslint-disable no-lone-blocks */
import {Platform} from 'react-native';
import Toast from 'react-native-simple-toast';

export const CustomToast = string => {
  Toast.show(string);
};

export const CustomToastDev = () => {
  // Toast.show(I18n.t('hendleError.undeveloped'));
};

export const convertCurrency = value => {
  if (value == null) {
    return 0;
  }
  if (typeof value !== 'string') {
    value = value.toString();
  }
  if (value === '0') {
    return '0';
  }
  let result = '';
  if (value.length >= 3) {
    result = value;
  }
  if (value.length >= 4) {
    result = `${value.substr(0, value.length - 3)}.${value.substr(
      value.length - 3,
      value.length,
    )}`;
  }
  if (value.length >= 7) {
    result = `${value.substr(0, value.length - 6)}.${value.substr(
      value.length - 6,
      3,
    )}.${value.substr(value.length - 3, value.length)}`;
  }
  if (value.length >= 10) {
    result = `${value.substr(0, value.length - 9)}.${value.substr(
      value.length - 9,
      3,
    )}.${value.substr(value.length - 6, 3)}.${value.substr(
      value.length - 3,
      value.length,
    )}`;
  }

  return result;
};

export const getHtmlStyles = () => {
  let styles = '';
  {
    Platform.OS === 'android'
      ? (styles = `<style>
      * {
        font-size: 14px !important;
        text-align: justify;
        line-height: 1.5;
        font-family: Roboto;
      }
      body{
        margin: 0 !important;
        padding: 0 !important;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
        padding: 0;
        margin: 10px auto;
        border-radius: 10px;
      }
      p, figure {
        padding: 0;
        margin: 0;
      }
    </style>`)
      : (styles = `<style>
      * {
        font-size: 36px !important;
        text-align: justify;
        line-height: 1.5;
        font-family: -apple-system;
      }
      body{
        margin: 0 !important;
        padding: 0 !important;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
        padding: 0;
        margin: 10px auto;
        border-radius: 10px;
      }
      p, figure {
        padding: 0;
        margin: 0;
      }
      </style>`);
  }

  return styles;
};

export const convertHTML = str => {
  return str.replace(/font-family:[^;]+;?|font-weight:[^;]+;?/g, '');
};

export const convertHTMLtoText = str => {
  return str
    .replace(/<style([\s\S]*?)<\/style>/gi, ' ')
    .replace(/<script([\s\S]*?)<\/script>/gi, ' ')
    .replace(/(<(?:.|\n)*?>)/gm, ' ')
    .replace(/\s+/gm, ' ');
};

export const convertCart = cart => {
  return JSON.stringify(
    cart.map(value => {
      return {
        option_id: value.option.id,
        item_id: value.item_id,
        quantity: value.quantity,
        price: value.option.Price || value.price,
        price_buy: value.option.PriceBuy || value.price_buy,
      };
    }),
  );
};

export const convertOption = (arr_option_tmp, option1, option2, option3) => {
  return arr_option_tmp?.find(value => {
    const checkOption1 = value.Option1 === option1;
    const checkOption2 = value.Option2 === option2;
    const checkOption3 = value.Option3 === option3;
    return checkOption1 && checkOption2 && checkOption3;
  });
};
