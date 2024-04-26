import React, { useState } from 'react'
import { View, Modal, SafeAreaView, TouchableOpacity } from 'react-native'
import IconF from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'

import PaywallScreen from '../Paywall'
import { Box, Text } from '../../components'
import BottomSheet from '../../components/BottomSheet/BottomSheet'
import { getNormalizedSizeWithPlatformOffset, getNormalizedVerticalSizeWithPlatformOffset } from '../../../helpers/pixelPerfect'
import { useNavigation } from '@react-navigation/native'

// shield-checkmark-outline
// Person
// bell
// help-circle
// logout


const PROFILE_LIST = [
  {
    id: 1,
    name: "Editar Perfil",
    icon: <IconIonicons name="person" size={28} color="#8C6FF7" />
  },
  {
    id: 2,
    name: "Notificação",
    icon: <IconF name="bell" size={28} color="#8C6FF7" />
  },
  {
    id: 3,
    name: "Segurança",
    icon: <IconIonicons name="shield-checkmark-outline" size={28} color="#8C6FF7" />
  },
  {
    id: 4,
    name: "Ajuda",
    icon: <IconIonicons name="help-circle" size={28} color="#8C6FF7" />
  },
  {
    id: 5,
    name: "Tema Escuro",
    isSwitch: false,
    icon: <IconIonicons name="help-circle" size={28} color="#8C6FF7" />

  },
  {
    id: 6,
    name: "Sair",
    icon: <IconIonicons name="help-circle" size={28} color="#5A31F4" />
  }
]

const ProfileScreen = () => {
  const [isPremium, setIsPremium] = useState<boolean>(false)
  const [isLogout, setIsLogout] = useState<boolean>(false)

  const { setParams } = useNavigation()

  const handleIsPremium = () => {
    setIsPremium(true)
  }

  const handleIsOpenBottomSheetLogout = () => {
    setIsLogout(true)

    setParams({ isBottomSheet: true }) // TIPAR 
  }

  const handleClose = () => {
    setIsLogout(false)
    setParams({ isBottomSheet: false })
  }

  const Logout = () => {
    return (
      <Box>
        <Text
          fontSize={16}
          fontWeight='bold'
          color="white"
          textAlign='center'
        >Deseja realmente sair ?</Text>

        <Box 
          flexDirection='row' 
          alignItems='center'
          justifyContent='space-around'  
          mt="ll"
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleClose}
          >
            <Box
              backgroundColor='purpleLight'
              height={getNormalizedVerticalSizeWithPlatformOffset(45)}
              width={getNormalizedSizeWithPlatformOffset(150)}
              borderRadius={8}
              justifyContent='center'
              alignItems='center'
            >
              <Text
                color="white"
                fontWeight='500'
                fontSize={16}
              >Cancelar</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
          >
            <Box
              backgroundColor='purplePrimary'
              height={getNormalizedVerticalSizeWithPlatformOffset(45)}
              width={getNormalizedSizeWithPlatformOffset(150)}
              borderRadius={8}
              justifyContent='center'
              alignItems='center'
            >
              <Text
                fontWeight='bold'
                fontSize={16}
                color="white"
              >Sair</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    )
  }
  return (
    <SafeAreaView>
      <Box
        marginHorizontal='m'
      >
        <Text
          fontSize={16}
          fontWeight='700'
          color="black400"
          textAlign='center'
        >
          Perfil
        </Text>

        <Box
          alignSelf='center'
          mt="l"
          alignItems='center'
        >
          {/** Vem imagem do perfil */}
          <Box 
            height={100} 
            width={100} 
            borderRadius={50} 
            backgroundColor='blackOpacity' 
          />
          <Text 
            mt="sm"
            fontSize={16}
            fontWeight='700'
            color="black400"
          >
            Thiago Lourenço
          </Text>
          <Text
            fontSize={14}
            fontWeight='600'
            color="black400"
          >thiagolourencosaraiva123@gmail.com</Text>
        </Box>

        <TouchableOpacity onPress={handleIsPremium} activeOpacity={1}>
          <Box
            backgroundColor='purplePrimary'
            padding="sm"
            borderRadius={16}
            mt="ml"
            paddingVertical='m'
            shadowColor='purpleLight'
            shadowOffset={{
              height: 4,
              width: 4
            }}
            shadowOpacity={1}
            shadowRadius={8}
            elevation={8}
          >
            <Box
              flexDirection='row'
              alignItems='center'
            >
              <Box
                backgroundColor='purpleLight'
                height={20}
                width={40}
                justifyContent='center'
                alignItems='center'
                borderRadius={20}
              >
                <Text
                  color='white'
                  fontWeight='bold'
                  fontSize={10}
                >PRO</Text>
              </Box>
              <Text
                color='white'
                fontWeight='bold'
                marginLeft='sm'
              >Faça o upgrade do plano</Text>
            </Box>
            <Text
              color='white'
              fontWeight='400'
              marginTop='sm'
            >Desbloqueie as melhores funcionalidade do seu Aplicativo</Text>
          </Box>
        </TouchableOpacity>
       

        {/** List Functions User Profile */}
        <Box mt="ml">
          {PROFILE_LIST.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => item.name === "Sair" ? handleIsOpenBottomSheetLogout() : {}}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 16
              }}
            >
              {item.icon}
              <Text
                marginLeft='sm'
                fontSize={18}
                color={item.name === "Sair" ? "purplePrimary" : "black400"}
              >{item.name}</Text>
            </TouchableOpacity>
          ))}
        </Box>
      </Box>
      
      <PaywallScreen isShow={isPremium} close={() => setIsPremium(false)} />
     {isLogout && (
        <BottomSheet 
          title='Sair'
          onClose={handleClose}
          height={220}
          children={<Logout />}
          sheetOverDrag={120}
        />
     )}
     
    </SafeAreaView>

  )
}

export default ProfileScreen