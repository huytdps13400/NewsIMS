import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Icons = {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons,
  Fontisto,
  Octicons,
  Ionicons,
};

export const getIconComponent = componentName => {
  if (!Icons[componentName]) {
    return null;
  }

  return Icons[componentName];
};

const Icon = ({type, name, size, color = theme.colors.text}) => {
  const IconComponent = getIconComponent(type);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent name={name} size={getSize.s(size)} color={color} />;
};

export default Icon;
