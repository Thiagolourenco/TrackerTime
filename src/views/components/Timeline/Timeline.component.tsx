import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Box} from '../Box';
import {Text} from '../Text';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../../helpers/pixelPerfect';
import {Button} from '../Button';

const TimelineCalendar = () => {
  // Vem do array qye vai ser retornado pelo back
  const hoursArray = Array.from({length: 24}, (_, i) => i);

  return (
    <Box
      marginLeft="ll"
      height={'100%'}
      flex={1}
      borderLeftColor="black400"
      borderLeftWidth={3}>
      <Box>
        <Box
          width={15}
          height={15}
          borderRadius={7}
          backgroundColor="background"
          style={{
            marginLeft: -getNormalizedSizeWithPlatformOffset(8),
          }}
        />

        <Box
          style={{
            backgroundColor: '#d7d7d7',
            width: getNormalizedSizeWithPlatformOffset(300),
            marginLeft: getNormalizedSizeWithPlatformOffset(16),
            height: getNormalizedVerticalSizeWithPlatformOffset(100),
            marginBottom: getNormalizedVerticalSizeWithPlatformOffset(18),
            borderRadius: 16,
            padding: 6,
          }}>
          <Box>
            <Box
              flexDirection="row"
              alignItems="center"
              style={{marginBottom: 2}}>
              <Text fontSize={18} fontWeight="700" style={{marginRight: 6}}>
                07:00
              </Text>

              <Button
                icon={<Icon name="arrow-up-right" color="#ffffff" size={16} />}
                onPress={() => {}}
                buttonVariants="circlePrimary"
                position="absolute"
                right={-240}
                top={-8}
              />
            </Box>
            <Text fontSize={16} fontWeight="500">
              Acordar de manhã
            </Text>
            <Text fontSize={14} fontWeight="400">
              Acordar, levantar e tomar banh gelado
            </Text>
          </Box>
          {/** Validação se já foi concluido ou nao */}
          <Text style={{marginTop: 12}}>Concluido</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TimelineCalendar;
