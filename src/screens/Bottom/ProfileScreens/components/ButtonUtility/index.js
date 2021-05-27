import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Image, Pressable, Switch} from 'react-native';
import styles from './styles';

const ButtonUtility = ({icon, title, check, onPress}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Pressable onPress={onPress}>
      <Block
        row
        alignCenter
        height={60}
        borderBottomWidth={1}
        paddingVertical={15}
        space="between"
        borderColor={theme.colors.whiteGray}>
        <Block row alignCenter>
          <Image source={icon} style={styles.icon} />
          <Text size={15} marginLeft={10} fontType={'medium'}>
            {title}
          </Text>
        </Block>
        {check ? (
          <Switch
            resizeMode="contain"
            trackColor={{
              false: theme.colors.blueHeader,
              true: theme.colors.gray,
            }}
            thumbColor={
              isEnabled ? theme.colors.whiteGray : theme.colors.whiteGray
            }
            ios_backgroundColor={theme.colors.blueHeader}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        ) : (
          <Image
            resizeMode="contain"
            source={icons.next_right}
            style={styles.icon_next}
          />
        )}
      </Block>
    </Pressable>
  );
};

export default ButtonUtility;
