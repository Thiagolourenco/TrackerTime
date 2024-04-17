import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { Box, CalendarComponent, TimelineCalendar } from '../../components'

const ScheduleScreen = () => {

  return (
      <Box
        backgroundColor='white'
        paddingTop='xll'
        flex={1}
      >
        {/** Calendar */}
        <CalendarComponent onPressDay={() => {}} />

        {/** Timeline */}
        <TimelineCalendar />
           

           <TouchableOpacity 
            activeOpacity={0.8}
            style={{
              position: "absolute",
              bottom: 16,
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