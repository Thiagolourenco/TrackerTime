import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle, withSpring, clamp, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

interface ISlider {
  steps: number
  onChange: (step: number) => void
}
const Slider = ({ steps, onChange }: ISlider) => {
  const [qntSteps, setQntSteps] = useState<number>(1)

  const sliderWidth = 20;
  const containerWidth = width - sliderWidth;
  const translationX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translationX.value;
    },
    onActive: (event, context) => {
      const newValue = context.startX + event.translationX
      translationX.value = Math.max(0, Math.min(newValue, containerWidth))
      // translationX.value = clamp(context.startX + event.translationX, 0, width - 20); // Limita a largura máxima do progresso
    },
    onEnd: (_, context) => {
      const stepSize = width / (steps - 1);
      const step = Math.round(translationX.value / stepSize);
      const newPosition = step * stepSize;
      translationX.value = withSpring(newPosition);

      runOnJS(onChange)(step + 1)
      runOnJS(setQntSteps)(step + 1)
      context.startX = 0;
    },
  });

  const sliderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value }],
      zIndex: 1,
    };
  });

  const textValueStep = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value }],
      zIndex: 1
    }
  })
  const progressStyle = useAnimatedStyle(() => {
    return {
      width: translationX.value,
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={styles.progressBar}>
          <Animated.View style={[styles.progress, progressStyle]} />
          <Animated.View style={[styles.slider, sliderStyle]} />
          <Animated.Text style={[{ color: "#fff", marginTop: 14, position: "absolute", marginLeft: 3, fontSize: 12, fontWeight: "600"}, textValueStep]}>
            {qntSteps}
          </Animated.Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    height: 5,
    marginTop: 16,
    borderRadius: 10,
    overflow: "visible"
  },
  progressBar: {
    flexDirection: 'row',
    width: '100%',
    height: 5,
    backgroundColor: 'lightgray',
    borderRadius: 15,
  },
  progress: {
    backgroundColor: '#5A31F4',
    // height: '100%',
    borderRadius: 15,
  },
  slider: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#8C6FF7',
    borderWidth: 5,
    borderColor: "#5A31F4",
    position: 'absolute',
    top: -8, 
    left: -4,
  },
});

export default Slider;
