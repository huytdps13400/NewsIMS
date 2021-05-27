import {Block, Button} from '@components';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import {width} from '@utils/responsive';
import {useImagePicker} from '@hooks';
import Storage from '@utils/storage';
import ImagePickerModal from '@components/ImagePickerModal';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ButtonProfile from './components/ButtonProfile';
import ButtonUtility from './components/ButtonUtility';
import {Data, DataMenu} from './components/DataProfile';
import HeaderProfile from './components/HeaderProfile';
import styles from './styles';

const ProfileScreens = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {picture, closeModal, openPicker, openCamera} = useImagePicker();
  const [isVisible, setIsVisible] = useState(false);
  const {isLoading} = useSelector(state => state.logOut);
  const user = useSelector(state => state.tokenUser.data);
  const _closeImagePickerModal = () => setIsVisible(false);

  useEffect(() => {
    setIsVisible(false);
  }, [closeModal]);

  useEffect(() => {
    if (picture) {
      const formData = new FormData();
      formData.append('picture', picture);

      dispatch({
        type: actions.UPDATE_USER_INFORMATION,
        user,
        formData,
      });
    }
  }, [dispatch, picture, user]);

  const _handleLogOut = () => {
    Storage.getItem('TOKEN_USER').then(tokenUser => {
      dispatch({
        type: actions.LOGOUT_ACCOUNT,
        params: {
          user: tokenUser,
        },
      });
    });
  };

  const _renderMenu = (item, index) => (
    <ButtonProfile
      key={index}
      image={item.image}
      title={item.title}
      onPress={() => navigation.navigate(item.navigation)}
    />
  );
  const _renderItem = (item, index) => (
    <ButtonUtility
      key={index}
      icon={item.image}
      title={item.title}
      check={item.params}
      onPress={() => navigation.navigate(item.navigation)}
    />
  );

  return (
    <Block flex backgroundColor="white">
      <HeaderProfile next setIsVisible={setIsVisible} />
      <Block
        row
        shadow
        alignCenter
        width={width - 24}
        padding={12}
        radius={5}
        backgroundColor="white"
        space={'between'}
        absolute
        top={width / 2.2}
        alignSelf="center">
        {DataMenu.map(_renderMenu)}
      </Block>
      <Block paddingHorizontal={12} marginTop={70}>
        {Data.map(_renderItem)}
        <Button
          style={styles.btnLogout}
          title={'ĐĂNG XUẤT'}
          onPress={() => _handleLogOut()}
          disabled={isLoading}
        />
      </Block>
      <ImagePickerModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onBackdropPress={_closeImagePickerModal}
        openPicker={openPicker}
        openCamera={openCamera}
      />
    </Block>
  );
};

export default ProfileScreens;
