/* eslint-disable no-unused-vars */
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const ListLocation = ({
  setSearch,
  setIsCheckSelect,
  useSelectTab,
  province,
  district,
  ward,
  setProvince,
  setDistrict,
  setWard,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {data} = useSelector(state => state.location);
  const [selectTab, setSelectTab] = useSelectTab;

  const _onSelectItem = item => {
    let params;
    switch (selectTab) {
      case 'PROVINCE':
        setProvince(item);
        setSelectTab('DISTRICT');
        params = {type: 'district', province_code: item.code};
        break;
      case 'DISTRICT':
        setDistrict(item);
        setSelectTab('WARD');
        params = {type: 'ward', district_code: item.code};
        break;
      case 'WARD':
        setWard(item);
        setIsCheckSelect(false);
        navigation.goBack();
        break;
    }
    dispatch({
      type: actions.GET_LOCATION,
      params,
    });
    setSearch('');
  };

  const _renderItem = ({item}) => {
    return (
      <Pressable onPress={() => _onSelectItem(item)}>
        <Block paddingVertical={8}>
          <Text>{item.title}</Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => String(index)}
      renderItem={_renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListLocation;
