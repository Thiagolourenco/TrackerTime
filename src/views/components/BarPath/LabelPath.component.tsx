import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, useFont } from '@shopify/react-native-skia'

interface ILabelPath {
  x: number
  y: number
  text: string
}

const LabelPath = ({ x, y, text }: ILabelPath) => {
  const font = useFont(require('../../../assets/fonts/Montserrat-SemiBold.ttf'), 14)

  if(!font) {
    return null
  }

  const fontSize = font?.measureText(text)
  return (
      <Text 
        text={text}
        color="#212121"
        font={font}
        x={x - fontSize.width / 2}
        y={y}
      />
  )
}

export default LabelPath

const styles = StyleSheet.create({})