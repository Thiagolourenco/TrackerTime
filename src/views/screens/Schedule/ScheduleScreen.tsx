import React from 'react'
import { FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Box, CalendarComponent, TimelineCalendar } from '../../components'

const ScheduleScreen = () => {
  const { height } = useWindowDimensions()
  const hoursArray = Array.from({ length: 24 }, (_, i) => i)

  return (
    <Box
      backgroundColor='white'
      paddingTop='xll'
      flex={1}
    >
      <FlatList
        data={hoursArray}
        renderItem={({ item }) => <TimelineCalendar />}
        ListHeaderComponent={<CalendarComponent onPressDay={() => { }} />}
        showsVerticalScrollIndicator={false}
      />



      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          position: "absolute",
          bottom: height / 7,
          right: 16,
          height: 50,
          width: 50,
          borderRadius: 25,
          backgroundColor: "#212121",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon name="plus" size={32} color="#FFF" />
      </TouchableOpacity>



    </Box>
  )
}

export default ScheduleScreen