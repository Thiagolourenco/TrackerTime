import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Path, Skia } from '@shopify/react-native-skia'
import { SharedValue, useDerivedValue } from 'react-native-reanimated'

interface IBarPath {
  x: number
  y: number
  barWidth: number
  graphHeight: number
  label: string,
  progress: SharedValue<number>
}

const BarPath = ({ barWidth, graphHeight, label, x, y, progress }: IBarPath) => {

  const path = useDerivedValue(() => {
    const barPath = Skia.Path.Make()

    barPath.addRRect({
      rect: {
        x: x - barWidth / 2,
        y: graphHeight,
        width: barWidth,
        height: y * progress.value * -1
      },
      rx: 12,
      ry: 12
    })

    return barPath
  })

  return (
    <Path path={path} color="#8C6FF7" />
  )
}

export default BarPath

const styles = StyleSheet.create({})