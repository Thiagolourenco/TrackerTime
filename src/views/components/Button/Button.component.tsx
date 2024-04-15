import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { 
  useRestyle, 
  spacing,
  border, 
  backgroundColor, 
  SpacingProps,
  BorderProps, 
  BackgroundColorProps, 
  
  composeRestyleFunctions
} from '@shopify/restyle'

import { Box } from '../Box'
import { Text } from '../Text'
import { Theme } from '../../../theme/theme'

type RestyleProps = SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor
])

type Props = RestyleProps & {
  onPress: () => void;
  label: string
  width: number
}

const Button = ({ onPress, label, width, ...rest }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Box {...rest} width={width} alignItems='center' justifyContent='center'>
        <Text variant='body' color='buttonPrimaryText'>{label}</Text>
      </Box>
    </TouchableOpacity>
  )
}

export default Button