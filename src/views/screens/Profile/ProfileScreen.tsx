import React from 'react'
import { View, Modal, SafeAreaView } from 'react-native'
import IconF from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'

import PaywallScreen from '../Paywall'
import { Box, Text } from '../../components'

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

        {/** List Functions User Profile */}
        <Box mt="ml">
          {PROFILE_LIST.map((item, index) => (
            <Box
              flexDirection='row'
              alignItems='center'
              mt="m"
            >
              {item.icon}
              <Text
                marginLeft='sm'
                fontSize={18}
                color={item.name === "Sair" ? "purplePrimary" : "black400"}
              >{item.name}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </SafeAreaView>

  )
}

export default ProfileScreen