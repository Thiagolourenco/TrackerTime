import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { FadeIn, SlideInDown, SlideInUp, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

interface IBottomSheet {
  onClose: () => void
}

const BottomSheet = ({ onClose }: IBottomSheet) => {
  const offset = useSharedValue(0)

  const close = () => {
    offset.value = 0
    onClose()
  }
  
  const pan = Gesture.Pan()
    .onChange((evnt) => {
      const offsetDelta = evnt.changeY + offset.value
      const clamp = Math.max(-20, offsetDelta)

      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
    } )
    .onFinalize((evnt) => {
      if (offset.value < 400 / 3) {
        offset.value = withSpring(0)
      } else {
        offset.value = withTiming(400, {}, () => {
          runOnJS(close)()
        })
      }
    })
  
  const stylesSheet = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
      zIndex: 1
    }
  })

  return (
    <GestureDetector gesture={pan}>
      <Animated.View 
        style={[styles.container, stylesSheet]}
        entering={SlideInDown.duration(600)}
      >
        <Text>BottomSheet</Text>
      </Animated.View>
    </GestureDetector>
  )
}

export default BottomSheet

const DIMENSIONS = Dimensions.get("window")
export const SHEET_HEIGHT = 220
export const SHEET_OVER_DRAG = 20

const styles = StyleSheet.create({ 
  container: {
    height:"80%",
    width: DIMENSIONS.width,
    backgroundColor: "#1E1F23",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

    position: "absolute",
    bottom: -SHEET_OVER_DRAG * 1.3,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#ccc",
  },
  contentBottomSheet: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center", 
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%"
  }
})