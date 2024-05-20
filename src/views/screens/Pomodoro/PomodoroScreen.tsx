/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
// import Timer from '../../components/Timer/Timer';
import {Canvas, Path, Skia} from '@shopify/react-native-skia';
import {Box, Text} from '../../components';
import {useSharedValue} from 'react-native-reanimated';

// import {useCountDown} from '../../../business/hooks';
// import {calculatePercentagePomodoro} from '../../../utils';

const RADIUS = 120;
const STROKE_WIDTH = 30;
// const TIME = 100000;
// const VALUE_MINU = 25;

export default () => {
  const innerRadius = RADIUS - STROKE_WIDTH / 2;

  const [secondLeft, setSecondLeft] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);

  // const valueInMis = VALUE_MINU * 60;
  // const {countDown} = useCountDown(valueInMis);

  // const percentage = useSharedValue<number>(0);
  const end = useSharedValue(0);

  const path = Skia.Path.Make();

  path.addCircle(RADIUS, RADIUS, innerRadius);

  // const handleGetClock = () => {
  //   const percetageGenerate = calculatePercentagePomodoro(
  //     countDown,
  //     valueInMis,
  //   );

  //   console.log('percetageGenerate', percetageGenerate);
  //   percentage.value = withTiming(20, {duration: 1000});
  //   end.value = withTiming(countDown / valueInMis, {duration: 1000});
  // };

  useEffect(() => {
    let invervalId: NodeJS.Timeout;

    if (isActive && secondLeft > 0) {
      invervalId = setInterval(() => {
        setSecondLeft(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(invervalId);
  }, [isActive, secondLeft]);

  const startTimer = () => {
    setIsActive(true);
  };

  // const stopTimer = () => {
  //   setIsActive(false);
  // };

  // const resetTimer = () => {
  //   setIsActive(false);
  //   setSecondLeft(25 * 60);
  // };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  console.log('FORMAT', secondLeft);

  return (
    // <SafeAreaView>
    <View style={{flex: 1}}>
      {/* <Timer /> */}
      <Box
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
          marginTop: RADIUS / 2,
          marginLeft: RADIUS / 4.4,
        }}>
        <Canvas style={{flex: 1}}>
          <Path
            path={path}
            color="#212121"
            style="stroke"
            strokeJoin="round"
            strokeWidth={STROKE_WIDTH / 1.5}
            strokeCap="round"
            start={0}
            end={1}
          />

          <Path
            path={path}
            strokeWidth={STROKE_WIDTH / 1.5}
            color="#c2ecff"
            style="stroke"
            strokeJoin="round"
            strokeCap="round"
            start={0}
            end={end}
          />
        </Canvas>
      </Box>

      <TouchableOpacity onPress={startTimer}>
        <Text>INICIAR</Text>
      </TouchableOpacity>

      <Text>{formatTime(secondLeft)}</Text>
    </View>
    // </SafeAreaView>
  );
};
