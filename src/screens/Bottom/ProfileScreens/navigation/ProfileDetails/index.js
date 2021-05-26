import {icons} from '@assets';
import {Block, Button, RadioButton, Text, TextInput} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import moment from 'moment';
import React, {useState} from 'react';
import {Image, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderProfile from '../../components/HeaderProfile';
import styles from './styles';
const DATA = [
  {value: '0', label: 'nam'},
  {value: '1', label: 'nữ'},
];
const ProfileDetails = ({route}) => {
  const {user} = route.params;
  const tokenUser = useSelector(state => state.tokenUser.data);
  const dispatch = useDispatch();

  const [marital, setMarital] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setfullName] = useState('');
  const [email] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [city, setCity] = useState('');

  const _onConfirmInfo = () => {
    Keyboard.dismiss();
    const formData = new FormData();
    formData.append('full_name', fullName);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('birthday', birthday);
    formData.append('gender', gender);
    dispatch({
      type: actions.UPDATE_USER_INFORMATION,
      user: tokenUser,
      formData,
      goBack: false,
    });
  };

  return (
    <Block>
      <HeaderProfile canGoBack />

      <Block
        shadow
        flex
        justifyCenter
        paddingHorizontal={30}
        radius={17}
        width={width - 22}
        space={'between'}
        absolute
        top={175}
        alignSelf="center"
        backgroundColor="white">
        <Block row alignCenter space={'between'} marginTop={20}>
          <Text size={16} fontType="bold">
            Thông tin hồ sơ của bạn
          </Text>
          <Image style={styles.imageTitle} source={icons.edit} />
        </Block>
        <Block
          row
          alignCenter
          borderBottomWidth={1}
          borderBottomColor={theme.colors.smoke}
          paddingBottom={10}
          paddingTop={30}>
          <TextInput
            iconLeft={icons.profile7}
            style={styles.inputWrap}
            inputStyle={styles.input}
            containerStyle={styles.container}
            testLeft={'Họ và tên: '}
            placeholder={user.full_name}
            keyboardType="phone-pad"
            value={fullName}
            onChangeText={text => setfullName(text)}
          />
        </Block>
        <Block
          row
          alignCenter
          borderBottomWidth={1}
          borderBottomColor={theme.colors.smoke}
          paddingBottom={10}
          paddingTop={30}>
          <Image
            source={icons.profile6}
            resizeMode="contain"
            style={styles.imageTitle}
          />
          <Text marginLeft={5}>Giới tính</Text>
          <RadioButton
            itemStyle={styles.radioBtn}
            data={DATA}
            selected={gender}
            setSelected={setGender}
          />
        </Block>

        <Block
          row
          alignCenter
          borderBottomWidth={1}
          borderBottomColor={theme.colors.smoke}
          paddingBottom={10}
          paddingTop={30}>
          <TextInput
            iconLeft={icons.profile7}
            style={styles.inputWrap}
            inputStyle={styles.input}
            containerStyle={styles.container}
            testLeft={'Ngày sinh: '}
            placeholder={moment(user.birthday * 1000).format('DD/MM/YYYY')}
            keyboardType="phone-pad"
            value={birthday}
            onChangeText={text => setBirthday(text)}
          />
        </Block>
        <Block
          row
          alignCenter
          borderBottomWidth={1}
          borderBottomColor={theme.colors.smoke}
          paddingBottom={10}
          paddingTop={30}>
          <TextInput
            iconLeft={icons.profile8}
            style={styles.inputWrap}
            inputStyle={styles.input}
            containerStyle={styles.container}
            testLeft={'Thành phố:  '}
            placeholder={user.address ? user.address : 'Chưa cập nhật'}
            keyboardType="phone-pad"
            value={city}
            onChangeText={text => setCity(text)}
          />
        </Block>
        <Block
          row
          alignCenter
          borderBottomWidth={1}
          borderBottomColor={theme.colors.smoke}
          paddingBottom={10}
          paddingTop={30}>
          <TextInput
            iconLeft={icons.phone}
            style={styles.inputWrap}
            inputStyle={styles.input}
            containerStyle={styles.container}
            testLeft={'Số điện thoại: '}
            placeholder={user.phone}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </Block>
        <Block
          row
          alignCenter
          borderBottomWidth={1}
          borderBottomColor={theme.colors.smoke}
          paddingBottom={10}
          paddingTop={30}>
          <TextInput
            iconLeft={icons.profile10}
            style={styles.inputWrap}
            inputStyle={styles.input}
            containerStyle={styles.container}
            testLeft={'Tình trạng hôn nhân '}
            placeholder={'Độc thân'}
            keyboardType="phone-pad"
            value={marital}
            onChangeText={text => setMarital(text)}
          />
        </Block>

        <Button
          onPress={() => _onConfirmInfo()}
          style={{marginTop: 45, marginBottom: 30}}
          title={'Cập nhật tài khoản'}
        />
      </Block>
    </Block>
  );
};

export default ProfileDetails;
