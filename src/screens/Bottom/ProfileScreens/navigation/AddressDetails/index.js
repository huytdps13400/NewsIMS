/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header} from '@components';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SelectCity from './SelectCity';

const AddressDetails = ({route}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser.data);
  const [isCheckSelect, setIsCheckSelect] = useState(false);
  const {setCity} = route.params;
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');

  useEffect(() => {
    if (province && district && ward) {
      setCity(`${province?.title} ${district?.title} ${ward?.title}`);
    }
  }, [ward, district, province]);

  const _renderContent = props => {
    return (
      <Block flex>
        <SelectCity
          setIsCheckSelect={setIsCheckSelect}
          setProvince={setProvince}
          setDistrict={setDistrict}
          setWard={setWard}
          province={province}
          district={district}
          ward={ward}
        />
      </Block>
    );
  };

  return (
    <Block flex>
      <Header canGoBack title={'thêm địa chỉ'} />
      {_renderContent()}
    </Block>
  );
};

export default AddressDetails;
