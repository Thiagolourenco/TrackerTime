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
      borderLeftColor="gray"
      borderLeftWidth={3}>
      <Box>
        <Box
          width={15}
          height={15}
          borderRadius={7}
          backgroundColor="purplePrimary"
          style={{
            marginLeft: -getNormalizedSizeWithPlatformOffset(8),
          }}
        />

        <Box
          backgroundColor="white"
          borderWidth={0.5}
          borderColor="gray"
          borderLeftWidth={6}
          borderLeftColor="badgeConclued"
          shadowColor="textColorGray"
          shadowOffset={{
            height: 4,
            width: 4,
          }}
          shadowOpacity={0.2}
          shadowRadius={4}
          elevation={8}
          width={getNormalizedSizeWithPlatformOffset(300)}
          borderRadius={16}
          marginLeft="l"
          padding="sm"
          mb="m">
          <Box>
            <Box
              flexDirection="row"
              alignItems="center"
              style={{marginBottom: 2}}>
              <Text
                fontSize={18}
                fontWeight="bold"
                style={{marginRight: 6}}
                color="textColorGray"
                mb="s">
                07:00
              </Text>

              <Button
                icon={<Icon name="arrow-up-right" color="#ffffff" size={16} />}
                onPress={() => {}}
                buttonVariants="circlePrimary"
                position="absolute"
                right={-230}
                top={-16}
              />
            </Box>
            <Text fontSize={16} fontWeight="500">
              Acordar de manhã
            </Text>
            <Text fontSize={14} fontWeight="400" color="textColorGray">
              Acordar, levantar e tomar banh gelado
            </Text>
          </Box>
          {/** Validação se já foi concluido ou nao */}
          <Box
            backgroundColor="badgeConclued"
            height={20}
            width={100}
            justifyContent="center"
            alignItems="center"
            borderRadius={4}
            mt="m">
            <Text color="white" fontWeight="bold" fontSize={10}>
              Concluído
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TimelineCalendar;
