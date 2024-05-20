import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import { Box } from '..';
import { Canvas, Path, Skia } from '@shopify/react-native-skia';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RADIUS = 160
const STROKE_WIDTH = 30;
const OUTER_STROKE_WIDTH = 36
const GAP = 0.04

const Timer: React.FC = () => {
  const [isFocusing, setIsFocusing] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [pauseCount, setPauseCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showSecondTimer, setShowSecondTimer] = useState(false);
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const progress = useSharedValue(0);

  useEffect(() => {
    if (isRunning) {
      progress.value = withTiming(100, {
        duration: timeLeft * 1000,
        easing: Easing.linear,
      });
    } else {
      // Stop the progress animation when paused
      progress.value = progress.value; // Keep the current progress value
    }
  }, [isRunning, timeLeft, progress]);

  const innerRadius = RADIUS - OUTER_STROKE_WIDTH / 2

  const end = useSharedValue(0);

  const handlePress = () => {
    console.log("TIME LEF", timeLeft)
    // const generateRandomValue = generateRandomNumber(GOALS);
    // const generatePercentage = calculatePercentage(generateRandomValue, GOALS);
    // setBalance(generateRandomValue);
    // percentage.value = withTiming(generatePercentage, {duration: 1000});
    end.value = withTiming(10 / 100, {duration: 1000});
  };

  useEffect(() => {
    handlePress()

    return () => {
      end.value = 0
    }
  }, [end, timeLeft])

  const path = Skia.Path.Make()
  path.addCircle(RADIUS, RADIUS, innerRadius)


  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsFocusing(true);
    setShowSecondTimer(false);
    setTimeLeft(25 * 60);
    setPauseCount(0);
    setCompleted(false);
    progress.value = 0;
  };

  const completeTimer = () => {
    setCompleted(true);
    Alert.alert(
      'Concluído',
      `Tempo gasto: ${isFocusing ? '25 minutos' : '5 minutos'}\nPausas: ${pauseCount}`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            if (isFocusing) {
              setShowSecondTimer(true); // Define como true para exibir o tempo de descanso
              setTimeLeft(5 * 60); // Define o tempo de descanso como 5 minutos
              return prevTime;
            } else {
              clearInterval(interval);
              completeTimer();
              return 0;
            }
          }
        });
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [isRunning, isFocusing]);
  

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Box style={{ width: RADIUS * 2, height: RADIUS * 2, marginTop: RADIUS / 2, marginLeft: RADIUS / 4.4}}>
      <Canvas style={{ flex: 1 }}>
        <Path
            path={path}
            color="#000"
            style="stroke"
            strokeJoin="round"
            strokeWidth={OUTER_STROKE_WIDTH}
            strokeCap="round"
            start={0}
            end={1}
        />

<Path
          path={path}
          strokeWidth={OUTER_STROKE_WIDTH}
          color="#c2ecff"
          style="stroke"
          strokeJoin="round"
          strokeCap="round"
          start={0}
          end={end}
        />
      </Canvas>
      </Box>
      <Text style={styles.timerText}>
        {`${Math.floor(timeLeft / 60)}:${(timeLeft % 60 < 10 ? '0' : '') + (timeLeft % 60)}`}
      </Text>
      {!completed && (
        <Box 
          flexDirection='row'
          
        >
          <TouchableOpacity style={styles.button} onPress={toggleTimer}>
            <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginLeft: 32}]} onPress={resetTimer}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </Box>
      )}

<View style={{
        width: "80%",
        height: 70,
        backgroundColor: "#ffffff",
        position: "absolute",
        marginHorizontal: 16,
        bottom: 30,
        borderRadius: 16,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}>
        <View>
          <Text>Tarefa</Text>
          <Text style={{ marginTop: 4}}>Trabalhar</Text>
        </View>
        <Text>Conlued</Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    width: "100%"
  },
  timerText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#9b59b6',
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default Timer;
