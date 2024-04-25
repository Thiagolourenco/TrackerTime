import { TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Box } from '../Box'
import { Text } from '../Text'

interface ITextInputComponent {
  icon?: string,
  onChange: (value: any) => void
  label: string
  value: string
  width?: number
}

const TextInputComponent = ({
  icon,
  label,
  onChange,
  value,
  width
}: ITextInputComponent ) => {
  return (
    <Box>
      <Text
        color="white"
        fontWeight='600'
        fontSize={16}
        mt="m"
      >
        {label}
      </Text>

      <Box
        height={50}
        width={width || "auto"}
        backgroundColor='white'
        borderRadius={8}
        justifyContent='space-between'
        alignItems='center'
        paddingHorizontal='s'
        flexDirection='row'
        mt="m"
      >
        <TextInput 
          autoCapitalize='none'
          onChangeText={(text) => onChange(text)}
          placeholder={label}
          value={value}
          style={{ flex: 1}}
        />

        {icon && <Icon name={icon} size={26} color="#212121" />}

      </Box>
   
    </Box>
  )
}

export default TextInputComponent