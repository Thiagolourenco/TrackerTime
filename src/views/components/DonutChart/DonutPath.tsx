import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Path, Skia, Text } from '@shopify/react-native-skia'
import { SharedValue, useDerivedValue, withTiming } from 'react-native-reanimated'


interface IDonutPath {
  strokeWidth: number
  outerStrokeWidth: number
  gap: number
  radius: number
  color: string
  decimals: SharedValue<number[]>
  index: number
}

const DonutPath = ({ 
  color,
  decimals,
  gap,
  index,
  outerStrokeWidth,
  radius,
  strokeWidth
}: IDonutPath) => {
  const innerRadius = radius - outerStrokeWidth / 2;

  const path = Skia.Path.Make()
  path.addCircle(radius , radius, innerRadius)

  const start = useDerivedValue(() => {
    if(index === 0) {
      return gap
    }

    const decimal = decimals.value.slice(0, index)

    const sum = decimal.reduce((acc, curr) => acc + curr, 0)

    return withTiming(sum + gap, { duration: 1000 })
  }, [])

  const end = useDerivedValue(() => {
    if(index === decimals.value.length - 1) {
      return withTiming(1, { duration: 1000 })
    }

    const decimal = decimals.value.slice(0, index + 1)

    const sum = decimal.reduce((acc, curr) => acc + curr, 0)

    return withTiming(sum, { duration: 1000 })
   }, [])

  return (
    <Path 
      path={path}
      color={color}
      style="stroke"
      strokeJoin="round"
      strokeWidth={strokeWidth}
      strokeCap="round"
      start={start}
      end={end}
    />
  )
}

export default DonutPath

const styles = StyleSheet.create({})