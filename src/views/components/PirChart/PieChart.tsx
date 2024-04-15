import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import {interpolate, useSharedValue } from 'react-native-reanimated';

const PieChart = ({ data }) => {
  const [percentages, setPercentages] = useState([]);
  const animatedProgress = useSharedValue(0); // Using useSharedValue for smooth animation

  useEffect(() => {
    const totalDuration = data.reduce((acc, task) => acc + task.totalDuration, 0);
    const categories = data.map(task => task.tasks.map(task => task.category)).flat();
    const uniqueCategories = [...new Set(categories)];
    const categoryDurations = uniqueCategories.map(category => {
      const tasks = data.map(task => task.tasks.filter(task => task.category === category)).flat();
      const totalDuration = tasks.reduce((acc, task) => acc + task.duration, 0);
      return totalDuration;
    });
    const percentages = categoryDurations.map(duration => (duration / totalDuration) * 100);
    setPercentages(percentages);
  }, []);

  // const rotation = interpolate(animatedProgress, {
  //   inputRange: [0, 1], // Input range for the animation progress (0 to 1)
  //   outputRange: ['0deg', '360deg'], // Output range for the rotation (0deg to 360deg)
  // });

  const colors = ['#0000FF', '#00FF00', '#FFFF00']; // Colors for categories

  useEffect(() => {
    const interval = setInterval(() => {
      animatedProgress.value = animatedProgress.value + 0.01; // Update smoothly
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={200} height={200}>
        <Circle
          cx={100}
          cy={100}
          r={80}
          fill="white"
          stroke="black"
          strokeWidth={1}
        />
        {percentages.map((percentage, index) => (
          <Path
            key={index}
            d={`M 100 100 L ${100 + 80 * Math.cos((index * 2 * Math.PI) / percentages.length)} ${100 + 80 * Math.sin((index * 2 * Math.PI) / percentages.length)} A 80 80 0 ${index === percentages.length - 1 ? 1 : 0} 1 ${100 + 80 * Math.cos(((index + 1) * 2 * Math.PI) / percentages.length)} ${100 + 80 * Math.sin(((index + 1) * 2 * Math.PI) / percentages.length)}} Z`}
            fill={colors[index]}
            stroke="black"
            strokeWidth={1}
            // transform={`rotate(${rotation})`}
          />
        ))}
      </Svg>
      <View style={styles.legend}>
        {percentages.map((percentage, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={{ backgroundColor: colors[index], width: 10, height: 10 }} />
            <Text style={styles.legendText}>30%</Text>
          </View>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legend: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default PieChart