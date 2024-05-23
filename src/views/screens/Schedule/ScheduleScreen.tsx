import React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Box,
  CalendarComponent,
  TimelineCalendar,
  Button,
} from '../../components';

const ScheduleScreen = () => {
  const {height} = useWindowDimensions();
  const hoursArray = Array.from({length: 24}, (_, i) => i);

  return (
    <Box backgroundColor="white" paddingTop="xll" flex={1}>
      <FlatList
        data={hoursArray}
        renderItem={({item}) => <TimelineCalendar />}
        ListHeaderComponent={<CalendarComponent onPressDay={() => {}} />}
        showsVerticalScrollIndicator={false}
      />

      <Button
        icon={<Icon name="plus" size={32} color="#FFF" />}
        onPress={() => {}}
        buttonVariants="circleSecondary"
        position="absolute"
        bottom={height / 7}
        right={16}
      />
    </Box>
  );
};

export default ScheduleScreen;
