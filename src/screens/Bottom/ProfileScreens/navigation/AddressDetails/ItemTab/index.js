/* eslint-disable no-unused-vars */
import {Text} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const ItemTab = ({
  item,
  setSearch,
  useSelectTab,
  province,
  district,
  ward,
  setProvince,
  setDistrict,
  setWard,
}) => {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config?.data);
  const [selectTab, setSelectTab] = useSelectTab;

  const labelName =
    item.type === 'PROVINCE'
      ? province.value?.title
      : item.type === 'DISTRICT'
      ? district.value?.title
      : ward.value?.title;

  const _onSetTab = tab => {
    setSearch('');
    switch (tab) {
      case 'PROVINCE':
        setSelectTab('PROVINCE');
        if (province.value) {
          setProvince('');
          setDistrict();
          setWard();
          dispatch({
            type: actions.GET_LOCATION,
            params: {
              type: 'province',
            },
          });
        }
        break;
      case 'DISTRICT':
        district.value && setSelectTab('DISTRICT');
        if (district.value) {
          setDistrict('');
          setWard('');
          dispatch({
            type: actions.GET_LOCATION,
            params: {
              type: 'district',
              province_code: province.value.code,
            },
          });
        }
        break;
      case 'WARD':
        district.value && setSelectTab('WARD');
        break;
    }
  };

  return (
    <Pressable
      onPress={() => _onSetTab(item.type)}
      style={{
        ...styles.btnTab,
        borderBottomWidth: getSize.m(3),
        borderColor:
          selectTab === item.type ? theme.colors.blue : theme.colors.smoke,
      }}>
      <Text numberOfLines={1}>{labelName || item.label}</Text>
    </Pressable>
  );
};

export default ItemTab;
