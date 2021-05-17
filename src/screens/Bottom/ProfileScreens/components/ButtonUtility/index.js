import React, {useState} from 'react';
import {Image, Switch} from 'react-native';
import {Block, Text} from '@components';
// import {Switch} from 'react-native-paper';
import {icons} from '@assets';

const ButtonUtility = ({icon, title, check}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Block paddingVertical={15} row justifyCenter space={'between'}>
      <Block row>
        <Image source={icon} style={{width: 20, height: 20}} />
        <Text marginLeft={10} size={15} fontType={'medium'}>
          {title}
        </Text>
      </Block>
      {check ? (
        <Switch
          trackColor={{false: '#0088EE', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : (
        <Image source={icons.next_right} style={{width: 10, height: 10}} />
      )}
    </Block>
  );
};

export default ButtonUtility;
