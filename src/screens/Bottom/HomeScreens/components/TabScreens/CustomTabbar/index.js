import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import styles from './styles';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <Block
      row
      shadow
      paddingHorizontal={12}
      shadowColor={theme.colors.black}
      backgroundColor={theme.colors.white}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.btn}>
              <Text style={styles.textlabel(isFocused, index)}>{label}</Text>
              <Block
                absolute
                height={2}
                left={0}
                bottom={0}
                right={0}
                marginLeft={index === 0 ? getSize.m(0) : getSize.m(20)}
                backgroundColor={isFocused ? theme.colors.blueHeader : 'white'}
              />
            </Pressable>
          );
        })}
      </ScrollView>
    </Block>
  );
};
export default CustomTabBar;
