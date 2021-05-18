import React, {useState} from 'react';
import {Image, Switch, Platform, Pressable} from 'react-native';
import {Block, Text} from '@components';
import {icons} from '@assets';

const ButtonUtility = ({icon, title, check, onPress}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Pressable onPress={onPress}>
      <Block
        borderBottomWidth={1}
        borderColor={'#E4E4E4'}
        paddingVertical={15}
        row
        justifyCenter
        space={'between'}>
        <Block row>
          <Image
            source={icon}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
          <Text marginLeft={10} size={15} fontType={'medium'}>
            {title}
          </Text>
        </Block>
        {check ? (
          <Switch
            trackColor={{false: '#0088EE', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#0088EE"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              transform:
                Platform.OS === 'ios'
                  ? [{scaleX: 0.8}, {scaleY: 0.8}]
                  : [{scaleX: 1}, {scaleY: 1}],
            }}
          />
        ) : (
          <Image
            source={icons.next_right}
            style={{width: 10, height: 10, resizeMode: 'contain'}}
          />
        )}
      </Block>
    </Pressable>
  );
};

export default ButtonUtility;
