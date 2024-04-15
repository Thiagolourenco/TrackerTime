import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';


const WeekBarChart = ({ tasksData }) => {

  console.log("TASK", tasksData)

  const [selectedTask, setSelectedTask] = useState(null);
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const barWidth = 30;
  const maxHeight = 200;

  const animatedHeight = useSharedValue(0);

  const handleBarPress = (task) => {
    setSelectedTask(task);
    animatedHeight.value = maxHeight - calculateBarHeight(task.completed);
  };

  const calculateBarHeight = (completedTasks) => {
    const totalTasks = tasksData.length;
    const completionPercentage = completedTasks / totalTasks;
    return maxHeight * completionPercentage;
  };

  const bars = tasksData.map((task, index) => {
    const barHeight = calculateBarHeight(task.completed);
    return (
      <
      >
      
       <Rect
          x={index * (barWidth + 10)}
          y={maxHeight - barHeight}
          width={barWidth}
          height={barHeight}
          fill="#6FCF97"
          onPress={() => handleBarPress(task)}
        />
      </>
    );
  });

  const tooltipStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: animatedHeight.value }],
  }));

  return (
    <View style={styles.container} >
      <Text>OPA</Text>
      <Svg width={tasksData.length * (barWidth + 10)} height={maxHeight}>
        {bars}
      </Svg>
      
      {selectedTask && (
        <Animated.View style={[styles.tooltip, tooltipStyle]}>
          <Text>Data: {selectedTask.date}</Text>
          <Text>Tarefas Concluídas: {selectedTask.completed}</Text>
          <Text>
            Pausas:{' '}
            {selectedTask.pauses.map((pause, index) => (
              <Text key={index}>
                {index > 0 ? ', ' : ''}
                {pause.duration} min
              </Text>
            ))}
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 92
  },
  tooltip: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default WeekBarChart;
