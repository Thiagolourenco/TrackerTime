import { View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Box, Text, Button } from '../../components'
import { PaylwallIlustration } from '../../../assets'

const PaywallScreen = () => {
  const [planSelect, setPlanSelect] = useState<string | null>("monthly")

  const handleSelectPlan = (plan: string) => {
    setPlanSelect(plan)
  }

  return (
    <Modal
      visible={true}
      style={{ height: 600 }}
      transparent
      animationType='fade'
    >
      <Box height={"100%"} backgroundColor='blackOpacity'>
        <Box 
          justifyContent='center' 
          alignItems='center'
          height={"90%"} 
          width={"100%"}
          backgroundColor='white'
          position='absolute'
          bottom={0}
          borderTopRightRadius={16} 
          borderTopLeftRadius={16}
          pb="xll"
        >

          <Icon name="close" size={32} color="#000" style={{ marginBottom: 32, position: "absolute", left: 16, top: 16}}/>

          <PaylwallIlustration />
          <Text
            fontSize={18}
            fontWeight='bold' 
            mb='m'       
            color="textColor"

          >Destrave novas feature</Text>

          <Box 
            borderBottomWidth={1} 
            borderBottomColor='background' 
            width={"90%"}
            mb='m'
            pb="m"
          >
          
          <Box 
            flexDirection='row'
            alignItems='center'
            mr='l'
          >
            <Box 
              width={10}
              height={10}
              borderRadius={8}
              backgroundColor='purplePrimary'
              borderWidth={3}
              borderColor='purpleLight'
              mr="m"
              mb="s"
            />
            <Text
              fontSize={12}
              fontWeight='600'
              color="textColorGray"
              mb="s"
              textAlign='left'
            >
              Aumento da produtividade: O método Pomodoro ajuda a manter o foco, reduzindo a procrastinação e aumentando a eficiência.
            </Text>
          </Box>
          
          <Box 
            flexDirection='row'
            alignItems='center'
            mr='l'
          >
            <Box 
              width={10}
              height={10}
              borderRadius={8}
              backgroundColor='purplePrimary'
              borderWidth={3}
              borderColor='purpleLight'
              mr="m"
              mb="s"
            />
            <Text
              fontSize={12}
              fontWeight='600'
              color="textColorGray"
              mb="s"
              textAlign='left'
            >
              Organize suas tarefas de forma estruturada, otimizando seu tempo e priorizando atividades importantes.
            </Text>
          </Box>

          <Box 
            flexDirection='row'
            alignItems='center'
            mr='l'
          >
            <Box 
              width={10}
              height={10}
              borderRadius={8}
              backgroundColor='purplePrimary'
              borderWidth={3}
              borderColor='purpleLight'
              mr="m"
              mb="s"
            />

            <Text
              fontSize={12}
              fontWeight='600'
              color="textColorGray"
              mb="s"
              textAlign='left'
            >
              Melhoria na concentração: Dividir o trabalho em intervalos de tempo ajuda a manter a concentração e a qualidade das tarefas
            </Text>
          </Box>
          </Box>


          <TouchableOpacity style={{width: "90%"}} onPress={() => handleSelectPlan('monthly')} activeOpacity={0.9}>
            <Box 
              backgroundColor='background' 
              padding='s' 
              width={"100%"}
              borderRadius={8}
              flexDirection='row'
              paddingVertical='m'
              alignItems='center'
            >
              <Box 
                backgroundColor={planSelect === "monthly" ? 'buttonPrimary' : "white"} 
                justifyContent='center' 
                alignItems='center' 
                width={25} 
                height={25} 
                borderRadius={13} mr='m'>
                  {planSelect === "monthly" && <Icon name="checkmark" color="white" size={20} />}
              </Box>
              <Box>
                <Text color='textColor'>R$ 29,90 / Mês</Text>
                <Text color='textColor'>3 dias grátis</Text>
              </Box>
            </Box>
          </TouchableOpacity>
          

          <TouchableOpacity style={{width: "90%"}} onPress={() => handleSelectPlan('yearly')} activeOpacity={0.9}>

          <Box
            backgroundColor='background' 
            padding='s' 
            width={"100%"}
            borderRadius={8}
            flexDirection='row'
            paddingVertical='m'
            alignItems='center'
            mt="m"
          >
            <Box 
              backgroundColor={planSelect === "yearly" ? "buttonPrimary" : "white"} 
              width={25} 
              height={25} 
              borderRadius={13} 
              justifyContent='center' 
              alignItems='center' 
              mr='m'
            >
              {planSelect === "yearly" && <Icon name="checkmark" color="white" size={20} />}
            </Box>

              <Box>
              <Text color='textColor'>R$ 129,00 / ano</Text>
              <Text color='textColor'>menos de 1,29 por mês</Text>
              </Box>
            </Box>
          </TouchableOpacity>
          <Button
            marginTop='l'
            width={240}
            borderRadius={8}
            paddingVertical='m'
            backgroundColor='buttonPrimary'
            onPress={() => {}}
            label='Iniciar 3 dias grátis'
          />
          {/* <TouchableOpacity>
            <Text>
              Iniciar 3 dias grátis
            </Text>
          </TouchableOpacity> */}
        </Box>
      </Box>
      
    </Modal>

  )
}

export default PaywallScreen