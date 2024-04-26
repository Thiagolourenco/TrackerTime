import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconIonicons from 'react-native-vector-icons/Ionicons'

const TabCustom = ({props}: any ) => {
  console.log("PROPS ", JSON.stringify(props))
  const [isZindex, setIsZindex] = useState<boolean>(false)

  const DATA = {
    PomodoroScreen: {
      label: "Pomodoro",
      icon: <IconIonicons name="timer" size={22} color="#ffffff" />
    },
    ScheduleScreen: {
      label: "Calendário",
      icon: <IconIonicons name="calendar-outline" size={22} color="#ffffff" />
    },
    HomeScreen: {
      label: "Inicio",
      icon: <IconAnt name="home" size={22} color="#ffffff" />
    },
    Analytics: {
      label: "Gráficos",
      icon: <IconEntypo name="bar-graph" size={22} color="#ffffff" />
    },
    Profile: {
      label: "Perfil",
      icon: <IconIonicons name="person" size={22} color="#ffffff" />
    }
  }

  useEffect(() => {
    const hasBottomSheet = props.state.routes.some(route => route.params?.isBottomSheet === true);

    console.log("OPA", hasBottomSheet)
    if (hasBottomSheet) {
      setIsZindex(true);
    } else {
      setIsZindex(false)
    }
  }, [props])
  
  
  const onPress = (route, index) => {
    
    const isFocused = props.state.index === index;

    const event = props.navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      props.navigation.navigate(route.name, route.params);
      }
    };

    const onLongPress = (route) => {
      props.navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    
  return (
    <View 
      style={{ 
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems: "center", 
        alignSelf: "center",
        height: 80, 
        borderTopWidth: 1,
        borderTopColor: "#8C6FF7",
        borderBottomWidth: 1,
        borderBottomColor: "#8C6FF7",
        // marginBottom: 32,
        position: "absolute",
        zIndex: isZindex ? -1 : 1,
        bottom: 32,
        width: "90%",
        borderRadius: 32,
        backgroundColor: "#ffffff",
      }}>
      {props.state.routes.map((item, index) => {
        const { options } = props.descriptors[item.key];

        const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : item.name;

        const barCustom = DATA[label]


        return (
          <TouchableOpacity 
            key={index} 
            style={{ justifyContent: "center", alignItems: "center"}}
            activeOpacity={0.8}
            onPress={() => onPress(item, index)}
            onLongPress={() => onLongPress(item)}
          >
            <View style={{ 
              height: 42 ,
              width: 42,
              backgroundColor: "#8C6FF7",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}>
              {barCustom.icon}
            </View>
          </TouchableOpacity>
        )
      }
       
      )}
    </View>
  )
}

export default TabCustom