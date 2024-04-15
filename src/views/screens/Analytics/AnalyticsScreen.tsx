import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { G, Path, Text as SvgText } from 'react-native-svg';

const generatePath = (percentage, radius) => {
  if (percentage === 100) {
    const x = radius;
    const y = radius;
    // in path x has to be 0 = starting point
    return `M ${0}, ${y}
        a ${x},${y} 0 1,1 ${radius * 2},0
        a ${x},${y} 0 1,1 -${radius * 2},0
        `;
  }

  const a = (percentage * 2 * Math.PI) / 100; // angle (in radian) depends on percentage
  const r = radius; // radius of the circle
  const rx = r;
  const ry = r;
  const xAxisRotation = 0;
  let largeArcFlag = 1;
  const sweepFlag = 1;
  const x = r + r * Math.sin(a);
  const y = r - r * Math.cos(a);
  if (percentage <= 50) {
    largeArcFlag = 0;
  } else {
    largeArcFlag = 1;
  }

  return `M${radius} ${radius} L${radius} 0 A${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y} Z`;
};

const DATA = [
  {
    name: 'Tarefa 1',
    percentage: 20,
    color: '#fbd203',
  },
  {
    name: 'Tarefa 2',
    percentage: 30,
    color: '#ffb300',
  },
  {
    name: 'Tarefa 3',
    percentage: 15,
    color: '#ff9100',
  },
  {
    name: 'Tarefa 4',
    percentage: 25,
    color: '#ff6c00',
  },
  {
    name: 'Tarefa 5',
    percentage: 10,
    color: '#ff3c00',
  },
];

const PieChart = ({ data }) => {
  const radius = 100;
  const slices = data.map((item, index) => {
    const path = generatePath(item.percentage, radius);
    const textX = radius + radius * 0.8 * Math.sin((item.percentage * Math.PI) / 100);
    const textY = radius - radius * 0.8 * Math.cos((item.percentage * Math.PI) / 100);

    return (
      <G key={index}>
        <Path d={path} fill={item.color} />
        <SvgText x={textX} y={textY} fill="#000" fontSize="12" textAnchor="middle" alignmentBaseline="central">
          {`${item.percentage}%`}
        </SvgText>
      </G>
    );
  });

  return (
    <Svg width={radius * 2} height={radius * 2}>
      <G transform={`translate(${radius}, ${radius})`}>{slices}</G>
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <PieChart data={DATA} />
    </View>
  );
}
