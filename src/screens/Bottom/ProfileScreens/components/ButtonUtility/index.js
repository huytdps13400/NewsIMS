import React, {useState} from 'react';
import {Image, Switch, Platform, Pressable} from 'react-native';
import {Block, Text} from '@components';
import {icons} from '@assets';
import styles from './styles';

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
          <Image source={icon} style={styles.icon} />
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
            style={styles.switch}
          />
        ) : (
          <Image source={icons.next_right} style={styles.icon_next} />
        )}
      </Block>
    </Pressable>
  );
};

export default ButtonUtility;
