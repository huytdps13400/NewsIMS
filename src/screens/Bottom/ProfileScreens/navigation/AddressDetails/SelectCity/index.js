/* eslint-disable react-hooks/exhaustive-deps */
import {icons} from '@assets';
import {Block, Text, TextInput} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import ItemTab from '../ItemTab';
import ListLocation from '../ListLocation';
import DataLocation from './DataLocation';
import styles from './styles';

const SelectCity = ({
  setIsCheckSelect,
  setProvince,
  setDistrict,
  setWard,
  province,
  district,
  ward,
}) => {
  const dispatch = useDispatch();
  const [selectTab, setSelectTab] = useState('PROVINCE');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setProvince('');
    setDistrict('');
    setWard('');
  }, []);

  useEffect(() => {
    dispatch({
      type: actions.GET_LOCATION,
      params: {
        type: 'province',
      },
    });
  }, [dispatch]);

  const _onChangeSearch = keyword => {
    setSearch(keyword);
    dispatch({
      type: actions.SEARCH_LOCATION,
      keyword,
    });
  };

  return (
    <Block flex>
      <Block row alignCenter backgroundColor={theme.colors.smoke}>
        {DataLocation.map((item, index) => (
          <ItemTab
            key={index}
            item={item}
            province={province}
            district={district}
            ward={ward}
            setProvince={setProvince}
            setDistrict={setDistrict}
            setWard={setWard}
            setSearch={setSearch}
            useSelectTab={[selectTab, setSelectTab]}
          />
        ))}
      </Block>
      <Text>{setSearch}</Text>
      <Block flex backgroundColor="white" padding={12}>
        <TextInput
          style={styles.input}
          iconLeft={icons.search}
          containerStyle={styles.contentInput}
          placeholder={'tìm kiếm'}
          placeholderTextColor={theme.colors.placeholder}
          value={search}
          onChangeText={_onChangeSearch}
        />

        <ListLocation
          setSearch={setSearch}
          setIsCheckSelect={setIsCheckSelect}
          useSelectTab={[selectTab, setSelectTab]}
          province={province}
          district={district}
          ward={ward}
          setProvince={setProvince}
          setDistrict={setDistrict}
          setWard={setWard}
        />
      </Block>
    </Block>
  );
};

export default SelectCity;
