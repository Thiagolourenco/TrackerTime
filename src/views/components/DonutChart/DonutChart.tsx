import { View } from 'react-native'
import React from 'react'
import { SharedValue, useDerivedValue } from 'react-native-reanimated'
import { Canvas, Patch, Path, SkFont, Skia, Text } from '@shopify/react-native-skia'
import { format, millisecondsToHours} from 'date-fns'

import DonutPath from './DonutPath'
import { convertTemp } from '../../../utils'

interface IDonutChart {
  n: number
  gap: number
  radius: number
  strokeWidth: number
  outerStrokeWidth: number
  decimals: SharedValue<number[]>
  colors: string[]
  totalValue: SharedValue<number>
  font: SkFont
  fontSmall: SkFont
}

const DonutChart = ({
  colors,
  decimals,
  font,
  fontSmall,
  gap,
  n,
  outerStrokeWidth,
  radius,
  strokeWidth,
  totalValue
}: IDonutChart) => {
  const hour = totalValue.value * 1000

  const formartHour = millisecondsToHours(hour)

  const horas = Math.floor(totalValue.value / 3600); // Calculando horas
  const minutos = Math.floor((totalValue.value % 3600) / 60); // Calculando minutos

  const tempoFormatado = format(new Date().setHours(horas, minutos), 'HH:mm'); // Formatando o tempo

  const temp = convertTemp(totalValue.value)

  const array = Array.from({ length: n })
  const innerRadius = radius - outerStrokeWidth / 2

  const path = Skia.Path.Make()
  path.addCircle(radius, radius, innerRadius)

  const targetText = useDerivedValue(() => `${temp.hour}h`, [])

  const fontSize = font.measureText('$00')
  const fontSizeSmall = fontSmall.measureText('Total de Hora Gasta')

  const textX = useDerivedValue(() => {
    const _fontSize = font.measureText(targetText.value)

    return radius - _fontSize.width / 2;
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Path 
          path={path}
          color="#f4f7fc"
          style="stroke"
          strokeJoin="round"
          strokeWidth={outerStrokeWidth}
          strokeCap="round"
          start={0}
          end={1}
        />

        {array.map((_, index) => {
          return (
            <DonutPath 
              decimals={decimals}
              key={index}
              radius={radius}
              strokeWidth={strokeWidth}
              outerStrokeWidth={outerStrokeWidth}
              color={colors[index]}
              index={index}
              gap={gap}
            />
          )
        })}

        <Text 
          x={radius - fontSizeSmall.width / 3}
          y={radius + fontSizeSmall.height / 2 - fontSize.height / 1.5}
          text="Tempo gasto"
          font={fontSmall}
          color="#000000"
        />

        <Text 
          x={textX}
          y={radius + fontSize.height / 2}
          text={targetText}
          font={font}
          color="#000000"
        />
      </Canvas>
    </View>
  )
}

export default DonutChart