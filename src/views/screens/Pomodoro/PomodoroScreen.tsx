/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
// import Timer from '../../components/Timer/Timer';
import {Canvas, Path, Skia} from '@shopify/react-native-skia';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Box, Button, Text} from '../../components';
import {useSharedValue} from 'react-native-reanimated';

// import {useCountDown} from '../../../business/hooks';
// import {calculatePercentagePomodoro} from '../../../utils';

Icon.loadFont();

const RADIUS = 120;
const STROKE_WIDTH = 30;
// const TIME = 100000;
// const VALUE_MINU = 25;

export default () => {
  const innerRadius = RADIUS - STROKE_WIDTH / 2;

  const [secondLeft, setSecondLeft] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState<boolean>(false);

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
    <View
      style={{
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 62,
        backgroundColor: '#ffff',
      }}>
      {/* <Timer /> */}
      <Box alignItems="center">
        <Text fontSize={16} color="black400" fontWeight="600">
          Pomodoro Timer
        </Text>
      </Box>
      <Box
        position="absolute"
        alignItems="center"
        justifyContent="center"
        left={RADIUS / 1}
        top={RADIUS / 1}>
        <Text fontSize={14} fontWeight="500" color="blackOpacity">
          Tarefa
        </Text>
        <Text fontSize={18} fontWeight="bold" color="black400" marginTop="s">
          Criar Tela Da Home
        </Text>
      </Box>
      <Box
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
          marginTop: RADIUS,
        }}>
        <Canvas style={{flex: 1}}>
          <Path
            path={path}
            color="#212121"
            style="stroke"
            strokeJoin="round"
            strokeWidth={STROKE_WIDTH / 2.5}
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

      <Box
        position="absolute"
        top={RADIUS / 0.43}
        left={RADIUS / 0.9}
        alignItems="center">
        <Text fontSize={42} fontWeight="bold" color="black400">
          {formatTime(secondLeft)}
        </Text>
        <Text
          fontSize={14}
          color="textColorGray"
          fontWeight="500"
          marginTop="s">
          2 de 10 Sessões
        </Text>
      </Box>

      <Box
        position="absolute"
        alignItems="center"
        justifyContent="center"
        bottom={RADIUS * 2}
        left={RADIUS / 1.5}>
        <Text fontSize={16} color="textColorGray" fontWeight="500">
          Momento de Pausa, 5 minutos
        </Text>

        {/** Melhorar Essas validação  */}
        {!isPlay && (
          <Button
            onPress={() => setIsPlay(true)}
            buttonVariants="circlePlayAndPause"
            backgroundColor="greenDark"
            mt="m"
            icon={
              <Icon
                name="play"
                size={42}
                color="white"
                style={{marginLeft: 4}}
              />
            }
          />
        )}

        {isPlay && (
          <Box flexDirection="row" alignItems="center" justifyContent="center">
            <TouchableOpacity style={{marginRight: 32}}>
              <Icon name="undo" size={32} color="#212121" />
            </TouchableOpacity>

            <Button
              onPress={() => setIsPlay(true)}
              buttonVariants="circlePlayAndPause"
              backgroundColor="greenDark"
              mt="m"
              icon={
                <Icon
                  name="pause"
                  size={42}
                  color="white"
                  style={{marginLeft: 2}}
                />
              }
            />
            <TouchableOpacity
              style={{marginLeft: 32}}
              onPress={() => setIsPlay(false)}>
              <Icon name="stop" size={32} color="#212121" />
            </TouchableOpacity>
          </Box>
        )}
      </Box>
    </View>
    // </SafeAreaView>
  );
};
