import React, { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import { AddTask, Box, Text } from "../../components";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import { useNavigation } from "@react-navigation/native";

const Data = [0,1,2,3]

export default () => {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState<boolean>(false)

  const { navigate } = useNavigation()

  const handleOpen = () => {
    setIsOpenBottomSheet(true)
  }

  return (
    <SafeAreaView>
      <View style={{ height: "100%"}}>
      <Box 
        marginHorizontal="m"
      >
        <Box
          flexDirection="row"
          justifyContent="space-between" 
          alignItems="center"
        >
            <Box 
              width={50} 
              height={50} 
              borderRadius={25} 
              backgroundColor="mainBackground" 

            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleOpen}
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: "#212121",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text color="mainBackground" style={{ fontSize: 18}}>+</Text>
            </TouchableOpacity>
            
          </Box>

          <Box
            flexDirection="row"
            mt="xl"
            mb="m"
          >
            <Box
              width={150}
              height={150}
              borderRadius={16}
              backgroundColor="cardPrimaryBackground"
            >

              </Box>


            <Box
              width={200}
              height={150}
              borderRadius={16}
              backgroundColor="cardPrimaryBackground"
              ml="m"
            >

              </Box>
          </Box>

          <FlatList 
            style={{ height: "100%" }}
            data={Data}
            renderItem={() => (
              <Box
                width={"100%"}
                height={80}
                backgroundColor="mainBackground"
                borderRadius={16}
                mt="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                paddingHorizontal="l"
              >
                <Box>
                  <Text>Nome da tarefa</Text>
                  <Text>Prioridade</Text>
                </Box>
               
               <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#212121",
                  backgroundColor: "#000000",
                }}
                onPress={() => navigate("PomodoroScreen")}
               >
                <Icon name="play" size={14} color="#FFFFFF" />
               </TouchableOpacity>
              </Box>
            )}
          />
        

      </Box>
    
      {isOpenBottomSheet &&  (
        <BottomSheet 
          title="Criar Tarefa"
          onClose={() => setIsOpenBottomSheet(false)} 
          children={<AddTask />}
        />
      )}

      </View>
    </SafeAreaView>
  
  )
}