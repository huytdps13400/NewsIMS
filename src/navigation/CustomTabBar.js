import {icons} from '@assets';
import {Block, Text} from '@components';
import actions, {_onUnmount} from '@redux/actions';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {memo, useEffect} from 'react';
import {Image, Platform, Pressable, StyleSheet} from 'react-native';
import {Badge} from 'react-native-elements';
import Animated, {multiply} from 'react-native-reanimated';
import {withTransition} from 'react-native-redash';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

const Icon = ({icon, color}) => {
  return (
    <Image
      source={icon}
      style={{
        ...styles.icoBottom,
        tintColor: color,
      }}
      resizeMode="contain"
    />
  );
};
const ITEM_SIZE = getSize.s(20);

const CustomTabBar = ({state, descriptors, navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.tokenUser.data);
  const totalNotify = useSelector(store => store.totalNotify?.data);

  const config = useSelector(reducer => reducer.config?.data);
  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    if (user) {
      dispatch({
        type: actions.GET_TOTAL_NOTIFICATION,
        params: {
          user,
          type: 'reading',
        },
      });
    }
    return () => {
      dispatch({type: _onUnmount(actions.GET_TOTAL_NOTIFICATION)});
    };
  }, [dispatch, user]);

  return (
    <Block
      row
      backgroundColor={theme.colors.white}
      paddingBottom={Platform.OS === 'ios' ? bottom : 10}
      paddingTop={10}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const activeTransition = withTransition(isFocused);
        const width = multiply(activeTransition, ITEM_SIZE);
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.tendency
            : index === 2
            ? icons.star
            : index === 3
            ? icons.notification
            : icons.profile;

        const iconSelected =
          index === 0
            ? icons.home_selected
            : index === 1
            ? icons.tendency_selected
            : index === 2
            ? icons.star_selected
            : index === 3
            ? icons.notification_selected
            : icons.profile_selected;

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
            key={`CustomTabBar-${index}`}
            onPress={onPress}
            style={styles.container}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onLongPress={onLongPress}>
            {index === 3 && !!totalNotify && (
              <Badge
                value={totalNotify || 0}
                status="error"
                containerStyle={styles.badge}
              />
            )}
            <Block style={styles.icoBottom}>
              <Block style={StyleSheet.absoluteFill}>
                <Icon
                  icon={isFocused ? iconSelected : icon}
                  color={theme.colors.lightGray}
                />
              </Block>
              <Animated.View style={{width, ...styles.hidden}}>
                <Icon
                  icon={isFocused ? iconSelected : icon}
                  color={
                    !isFocused
                      ? config?.general_active_color
                      : theme.colors.blue
                  }
                />
              </Animated.View>
            </Block>

            <Block>
              <Text
                center
                size={12}
                marginTop={5}
                color={
                  isFocused
                    ? config?.general_active_color
                    : theme.colors.lightGray
                }
                numberOfLines={1}>
                {label}
              </Text>
            </Block>
          </Pressable>
        );
      })}
    </Block>
  );
};

export default memo(CustomTabBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icoBottom: {
    height: ITEM_SIZE,
    width: ITEM_SIZE,
  },
  hidden: {
    overflow: 'hidden',
  },
  badge: {
    position: 'absolute',
    zIndex: 10,
    top: getSize.m(-7),
    right: getSize.m(15),
  },
});
