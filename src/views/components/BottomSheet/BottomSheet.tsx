import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  DimensionValue,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  SlideInDown,
  SlideInUp,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {Box} from '../Box';
import {Text} from '../Text';
import useStyles from './BottomSheet.style';

interface IBottomSheet {
  onClose: () => void;
  children: React.ReactNode;
  height?: DimensionValue;
  title: string;
  sheetOverDrag?: number;
}

export const SHEET_HEIGHT = 220;
export const SHEET_OVER_DRAG = 20;

const BottomSheet = ({
  onClose,
  children,
  height = '100%',
  title,
  sheetOverDrag = 20,
}: IBottomSheet) => {
  const offset = useSharedValue(0);

  const styles = useStyles({sheetOverDrag});
  const close = () => {
    offset.value = 0;
    onClose();
  };

  const pan = Gesture.Pan()
    .onChange(evnt => {
      const offsetDelta = evnt.changeY + offset.value;
      const clamp = Math.max(-20, offsetDelta);

      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(evnt => {
      if (offset.value < 400 / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(400, {}, () => {
          runOnJS(close)();
        });
      }
    });

  const stylesSheet = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[styles.container, stylesSheet, {height}]}
        entering={SlideInDown.duration(600)}>
        {/** Informação do BottomSheet, deve ser um children */}
        <Box>
          <Text
            color="white"
            fontSize={16}
            fontWeight="600"
            margin="m"
            textAlign="center">
            {title}
          </Text>
        </Box>

        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheet;
