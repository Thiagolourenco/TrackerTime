import { View } from 'react-native'
import React, { useState } from 'react'
import { Box } from '../Box'
import { getNormalizedSizeWithPlatformOffset } from '../../../helpers/pixelPerfect'
import SliderComponent from '../Slider'
import TextInputComponent from '../TextInput/TextInput.component'
import { Text } from '../Text'
import { Button } from '../Button'

const AddTask = () => {
  const [label, setLabel] = useState<string>("Nome da Tarefa")

  const [taskName, setTaskName] = useState<string>("")
  const [taskDate, setTaskDate] = useState<string>("")
  const [taskTime, setTaskTime] = useState<string>("")
  const [qtdSession, setQtdSession] = useState<number>(1)
  const [qtdTime, setQtdTime] = useState<number>(1)
  const [qtdPauses, setQtdPauses] = useState<number>(1)

  const formatarData = (data: string) => {
   return data
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3') // Formata como DD/MM/AAAA
    .substring(0, 10); 
  };

  const handleOnChangeText = (text: string) => {
    setTaskDate(formatarData(text));
  };


  const formatHour = (text: string) => {
    const hourFormat = text
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{2})/, '$1:$2')
      .substring(0, 5);
  
    return hourFormat;
  };


  const handleOnChangeTextHour = (text: string) => {
    setTaskTime(formatHour(text))
  }

  const handleRegisterNewTask = () => {
    const data = {
      taskName,
      taskDate,
      taskTime,
      qtdSession,
      qtdTime,
      qtdPauses
    }

    console.log("DATA", data)
  }

  return (
    <Box
        m="m"
      >
        <TextInputComponent 
          label="Nome da tarefa"
          onChange={(item) => setTaskName(item)}
          value={taskName}
        />

        <Box 
          flexDirection="row"
        >
          <TextInputComponent 
            label="data"
            onChange={handleOnChangeText}
            value={taskDate}
            width={getNormalizedSizeWithPlatformOffset(160)}
            icon="calendar-outline"
          />

          <Box marginHorizontal="m" />
          <TextInputComponent 
            width={getNormalizedSizeWithPlatformOffset(150)}
            label="Hora"
            onChange={handleOnChangeTextHour}
          
            value={taskTime}
            icon="time-outline"
          />
        </Box>

        <Box
          mt="l"
        > 
          <Text
            color="white"
            fontSize={16}
            fontWeight="600"
          >Quantas sessões de trabalho</Text>
          <SliderComponent 
            steps={4} 
            onChange={value => setQtdSession(value)}
          />
        </Box>


        <Box
          mt="ll"
        > 
          <Text
            color="white"
            fontSize={16}
            fontWeight="600"
          >Quanto tempo</Text>
          <SliderComponent 
            steps={30}
            onChange={value => setQtdTime(value)}
          />
        </Box>



        <Box
          mt="ll"
        > 
          <Text
            color="white"
            fontSize={16}
            fontWeight="600"
          >Quantas pausas</Text>
          <SliderComponent 
            steps={10}
            onChange={value => setQtdPauses(value)}
          />
        </Box>

       
        <Button 
          label="Criar nova tarefa"
          onPress={handleRegisterNewTask}
          width={getNormalizedSizeWithPlatformOffset(300)}
          backgroundColor="buttonPrimary"
          paddingVertical="sm"
          borderRadius={8}
          marginLeft="l"
          marginTop="xl"
        />
      </Box>
  )
}

export default AddTask