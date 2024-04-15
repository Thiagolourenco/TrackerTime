import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { format, isToday, getDay, startOfMonth, addMonths, subMonths } from 'date-fns';
import Icon from 'react-native-vector-icons/AntDesign'

import { Box } from '../../components'
import { ptBR } from 'date-fns/locale';
import { getNormalizedSizeWithPlatformOffset, getNormalizedVerticalSizeWithPlatformOffset } from '../../../helpers/pixelPerfect';

const ScheduleScreen = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [daysArray, setDaysArray] = useState([]); 

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  const hoursArray = Array.from({ length: 24 }, (_, i) => i)

  const today = new Date(); 
  const currentDayOfWeek = getDay(today); 
  const currentMonthStart = startOfMonth(today); 

  const startDayOfWeek = getDay(currentMonthStart);
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  

  const updateDaysArray = (month) => {
    const currentMonthStart = startOfMonth(month);
    const startDayOfWeek = getDay(currentMonthStart); 
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const newDaysArray = Array.from({ length: startDayOfWeek }, (_, i) => null);

    for (let i = 1; i <= daysInMonth; i++) {
      newDaysArray.push(i); 
    }

    setDaysArray(newDaysArray);
  };

  useEffect(() => {
    updateDaysArray(currentMonth);
  }, [currentMonth]);

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };


  const handleDayClick = (day: number) => {
    const currentDate = new Date(); // Data atual
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    console.log("SELEXT", selectedDate)
    // setSelectedDate(selectedDate);
  };

  return (
      <Box
        backgroundColor='buttonPrimary'
        paddingTop='xll'
        flex={1}
      >
        {/** Calendar */}
        <View>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: 32
          }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center"
              }}
            onPress={handlePreviousMonth}
          >
              <Icon name="left" size={16} color="#000" />
            </TouchableOpacity>
            <Text style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#FFFFFF"
            }}>{format(currentMonth, 'MMMM yyyy', { locale: ptBR})}</Text>
            <TouchableOpacity 
              activeOpacity={0.8}
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={handleNextMonth}
            >
              <Icon name="right" size={16} color="#000" />
            </TouchableOpacity>
          </View>
          
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 24
          }}
        >
          {daysOfWeek.map((item, key)  => (
            <Text key={key} style={{ color: "white", fontWeight: "600"}}>{item}</Text>
          ))}
        </View>
        <View style={{
              flexDirection: "row",
              // justifyContent: "space-around",
              alignItems: "flex-end",
              flexWrap: "wrap",
              padding: 10,
              marginLeft: 18
          }}>
        
        {daysArray.map((item, key) => (
            <TouchableOpacity 
              key={key}
              style={{
                backgroundColor: isToday(new Date(today.getFullYear(), today.getMonth(), item)) ? "#000000" : "transparent",
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
                marginBottom: 10,
                marginHorizontal: 4
              }}
              onPress={() => handleDayClick(item)}
            >
              <Text style={{ color: "#fff", fontWeight: "600"}}>{item}</Text>
            </TouchableOpacity>
      
        ))}
        </View>
        </View>

        {/** Timeline */}

            {/* <FlatList 
              data={hoursArray}
              renderItem={(item) => (
                <View>
                <View 
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 7,
                    backgroundColor: "#ccc",
                    marginTop: 32,
                    marginLeft: -8

                  }}
                />
              </View>
              )}
            /> */}
       
            <ScrollView style={{ flex: 1}}>
              <View
                style={{
                  // backgroundColor: "#fff",
                  marginLeft: 32,
                  // width: 4,
                  borderRadius: 2,
                  height: "100%",
                  flex: 1,
                  borderLeftWidth: 3,
                  borderLeftColor: "#ffffff"
                
                }}
              >
              
              {hoursArray.map((item, key) => (
                <>
                  <View 
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 7,
                      backgroundColor: "#ccc",
                      // marginTop: 32,
                      marginLeft: -getNormalizedSizeWithPlatformOffset(8)
                    }}
                  />

                <View style={{ 
                  backgroundColor: "#fff", 
                  width: getNormalizedSizeWithPlatformOffset(300), 
                  marginLeft: getNormalizedSizeWithPlatformOffset(16),
                  height: getNormalizedVerticalSizeWithPlatformOffset(100),
                  marginBottom: getNormalizedVerticalSizeWithPlatformOffset(18),
                  borderRadius: 16,
                  padding: 6

                }}>
                
                  <View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
                      <Text
                        style={{ fontSize: 18, fontWeight: "700", marginRight: 6}}
                      >07:00</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: "500"}}>Acordar de manhã</Text>
                    <Text style={{ fontSize: 14, fontWeight: "400"}}>Acordar, levantar e tomar banh gelado</Text>
                  </View>
                  {/** Validação se já foi concluido ou nao */}
                  <Text style={{ marginTop: 12}}>Concluido</Text>
                </View>
                </>
                
              ))}
            </View>
            </ScrollView>
           


         
    </Box>
  )
}

export default ScheduleScreen