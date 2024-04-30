import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import Animated, { FadeInDown, FadeInUp, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { Box, DonutChart, Text } from '../../components'
import { calculePercentage, task } from '../../../utils'
import { useFont } from '@shopify/react-native-skia'

type Props = {}

const RADIUS = 160
const STROKE_WIDTH = 30;
const OUTER_STROKE_WIDTH = 46
const GAP = 0.04

const DATA = [0, 1, 2, 3, 4, 5]

const DetailsTheDay = (props: Props) => {
  const n = 5;
  const [data, setData] = useState<any>([])
  const totalValue = useSharedValue<number>(0)
  const decimals = useSharedValue<number[]>([])
  const withProgress = useSharedValue<string>("0%")
  const colors = ['#fe769c', '#46a0f8', '#c3f439', '#88dabc', '#e43433'];

  useEffect(() => {
    handleGetData()

    withProgress.value = withTiming("100%", { duration: 3000 })
  }, [withProgress])

  const handleGetData = () => {
    const data = task.map(item => item.tempoGasto)

    const total = data.reduce((acc, curr) => acc + curr)
    const generatePercentages = calculePercentage(data, total)
    const generateDecimals = generatePercentages.map(number => Number(number.toFixed(0)) / 100)

    totalValue.value = withTiming(total, { duration: 1000 })
    decimals.value = [...generateDecimals]

    const valueOfObject = data.map((item, index) => ({
      ...task[index],
      porcentage: generatePercentages[index],
      color: colors[index]
    }))

    setData(valueOfObject)
  }

  const font = useFont(require("../../../assets/fonts/Montserrat-Bold.ttf"), 60)
  const fontSmall = useFont(require("../../../assets/fonts/Montserrat-Light.ttf"), 18)

  const stylesProgress = useAnimatedStyle(() => {
    return  {
      width: withProgress.value
    }
  })
  if (!font || !fontSmall) {
    return <View />
  }

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Animated.View 
            entering={FadeInDown.delay(index * 200)}
            exiting={FadeInUp}
          >
            <Box 
              backgroundColor='gray' 
              paddingHorizontal='m' 
              borderRadius={8}
              paddingVertical='m' mb="m">
              <Box 
                flexDirection='row' 
                justifyContent='space-between' 
                alignItems='center'
              >
                <Text>{item.nome}</Text>
                <Text>{item.tempoGasto} hrs</Text>
              </Box>

              <Animated.View 
                style={[{ height: 10, borderRadius: 8, backgroundColor: item.color, marginTop: 12}, stylesProgress]}
              />
            </Box>
          </Animated.View>
        
        )}
        ListHeaderComponent={() => (

          <View style={styles.containerChart}>
            <DonutChart
              radius={RADIUS}
              gap={GAP}
              strokeWidth={STROKE_WIDTH}
              outerStrokeWidth={OUTER_STROKE_WIDTH}
              font={font}
              fontSmall={fontSmall}
              totalValue={totalValue}
              n={n}
              decimals={decimals}
              colors={colors}
            />
          </View>
        )}
      />



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  containerChart: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    marginTop: 10,
    marginBottom: 32
  }
})

export default DetailsTheDay