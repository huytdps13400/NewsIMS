import {Shimmer} from '@components';
import Block from '@components/Block';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NotificationHolder = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {DATA.map((_, index) => (
        <Block key={index} style={styles.row(index)}>
          <Shimmer width={width - 105} height={95} marginBottom={0} />
          <Shimmer width={55} height={55} marginBottom={0} />
        </Block>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: index => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: getSize.m(20),
    borderTopWidth: index !== 0 ? getSize.s(1) : 0,
    borderColor: theme.colors.background,
  }),
});

export default NotificationHolder;
