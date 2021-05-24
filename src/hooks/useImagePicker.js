import {useState} from 'react';
import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const useImagePicker = () => {
  const [picture, setPicture] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [closeModal, setCloseModal] = useState(false);

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 512,
      height: 512,
      cropping: true,
    }).then(image => {
      setCloseModal(true);
      let path = image.path;
      let type = image.mime;
      let size = image.size;
      let name = image.path.substr(
        image.path.lastIndexOf('/') + 1,
        image.path.length,
      );

      setPicture({
        uri: Platform.OS === 'ios' ? 'file://' + path : path,
        type,
        size,
        name,
      });

      setCloseModal(false);
    });
  };

  const openMultiPicker = () => {
    ImagePicker.openPicker({
      width: 360,
      height: 360,
      multiple: true,
    }).then(images => {
      setCloseModal(true);

      setPictures(images);

      setCloseModal(false);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 512,
      height: 512,
      cropping: true,
    }).then(image => {
      setCloseModal(true);
      let path = image.path;
      let type = image.mime;
      let size = image.size;
      let name = image.path.substr(
        image.path.lastIndexOf('/') + 1,
        image.path.length,
      );

      setPicture({
        uri: Platform.OS === 'ios' ? 'file://' + path : path,
        type,
        size,
        name,
      });

      setCloseModal(false);
    });
  };

  return {
    picture,
    pictures,
    closeModal,
    openPicker,
    openMultiPicker,
    openCamera,
  };
};

export default useImagePicker;
