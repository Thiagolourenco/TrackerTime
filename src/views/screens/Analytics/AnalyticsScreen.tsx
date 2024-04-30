
import React, { useCallback, useEffect } from 'react'
import { FlatList, GestureResponderEvent, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native'
import { Canvas, Group } from '@shopify/react-native-skia'
import * as d3 from 'd3'
import Icon from 'react-native-vector-icons/AntDesign'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { IData, data } from '../../../server'
import { BarPath, Box, Text } from '../../components'
import Animated, { Easing, FadeInDown, FadeInUp, useSharedValue, withTiming } from 'react-native-reanimated'
import LabelPath from '../../components/BarPath/LabelPath.component'

const AnalyticsScreen = () => {
  const { width } = useWindowDimensions()
  const { navigate } = useNavigation()

  const DATA = [0, 1, 2, 3, 4, 5]

  const barWidth = 28;
  const graphMargin = 20;

  const canvasHeight = 360
  const canvasWidth = width
  const graphHeight = canvasHeight - graphMargin
  const graphWidth = width

  const progress = useSharedValue<number>(0)

  const xDomain = data.map((item: IData) => item.label)

  const xRange = [0, graphWidth]

  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1)

  const yDomain = [0, d3.max(data, (yData: IData) => yData.value)!]

  const yRange = [0, graphHeight]

  const y = d3.scaleLinear().domain(yDomain).range(yRange)

  useEffect(() => {
    progress.value = withTiming(1, { duration: 1000 })
  }, [progress])

  const touchHandler = (e: GestureResponderEvent) => {
    const touchX = e.nativeEvent.locationX;
    const touchY = e.nativeEvent.locationY;

    const index = Math.floor((touchX - barWidth / 2) / x.step())

    if (index >= 0 && index < data.length) {
      const dataInfo = data[index];

      if (touchX > x(dataInfo.label)! - barWidth / 2 && touchX < x(dataInfo.label)! + barWidth / 2 && touchY > graphHeight - y(dataInfo.value) && touchY < graphHeight) {
        navigate("DetailsTheDay", { data: dataInfo })
      } else {
        console.log("OPA")
      }
    }
    console.log("TOUCH", index)
  }

  const HeaderComponent = () => {
    return (
      <Box>
        <Box m="m">
          <Text
            fontSize={22}
            fontFamily='Montserrat-SemiBold'
          >
            Semana
          </Text>
          <Text
            fontSize={16}
            fontFamily='Montserrat-Regular'

          >
            Total Concluída: 34
          </Text>
        </Box>

        <Canvas
          style={{ width: canvasWidth, height: canvasHeight + 20, marginTop: 32 }}
          onTouchStart={touchHandler}
        >
          {data.map((item: IData, index) => (
            <Group key={index}>
              <BarPath
                progress={progress}
                x={x(item.label)!}
                y={y(item.value)}
                barWidth={barWidth}
                graphHeight={graphHeight}
                label={item.label}
              />
              <LabelPath
                x={x(item.label)!}
                y={canvasHeight}
                text={item.label}
              />
            </Group>
          ))}
        </Canvas>
        <Text
          ml="l"
          marginBottom='m'
          fontSize={18}
          fontFamily='Montserrat-Medium'
        >
          Ativadades Prioritaria
        </Text>
      </Box>

    )
  }

  return (
    <SafeAreaView>

      <FlatList
        data={DATA}
        ListHeaderComponent={<HeaderComponent />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Animated.View 
            exiting={FadeInUp.damping(200).easing(Easing.ease)}
            entering={FadeInDown.damping(200).easing(Easing.ease)}
          >
            <Box marginHorizontal='l' mb="m">


              <Box
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
                backgroundColor='greenPrimary'
                paddingVertical='m'
                paddingHorizontal='sm'
                borderRadius={8}
                shadowColor='blackOpacity'
                shadowOffset={{
                  height: 2,
                  width: 2
                }}
                shadowOpacity={0.2}
                shadowRadius={4}
              >
                <Box>
                  <Text color='white' fontSize={14} fontWeight='bold' fontFamily='Montserrat-Regular'>Fazer Exercicios</Text>
                  <Text color='purpleLight' fontSize={12} fontWeight='bold' fontFamily='Montserrat-Regular'>Prioridade Alta</Text>
                </Box>
                <Box
                  width={40}
                  height={40}
                  borderRadius={6}
                  backgroundColor='white'
                  justifyContent='center'
                  alignItems='center'
                  shadowColor='black400'
                  shadowOffset={{
                    height: 1,
                    width: 1
                  }}
                  shadowOpacity={0.2}
                  shadowRadius={1}
                >
                  <Icon name="check" color="green" size={24} />
                </Box>

              </Box>
            </Box>
          </Animated.View>

        )}

      />




    </SafeAreaView>
  )
}

export default AnalyticsScreen

const styles = StyleSheet.create({})