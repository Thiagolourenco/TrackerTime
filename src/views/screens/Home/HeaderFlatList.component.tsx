import React from 'react';
import {Box, Text} from '../../components';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../../helpers/pixelPerfect';

const HeaderFlatList = () => {
  return (
    <Box flexDirection="row" mt="xl" mb="m">
      <Box
        width={getNormalizedSizeWithPlatformOffset(150)}
        height={getNormalizedVerticalSizeWithPlatformOffset(120)}
        borderRadius={16}
        paddingHorizontal="s"
        paddingTop="m"
        backgroundColor="mainBackground"
        shadowColor="textColorGray"
        shadowOffset={{
          height: 4,
          width: 4,
        }}
        shadowOpacity={0.4}
        shadowRadius={4}
        elevation={8}>
        <Text fontSize={18} color="black400" fontWeight="700">
          Tarefas de Hoje
        </Text>
        <Text marginTop="m" fontSize={16} color="black400" fontWeight="500">
          3/8 Finalizadas
        </Text>

        <Box
          mt="m"
          height={14}
          borderRadius={12}
          width={'100%'}
          backgroundColor="greenLight"
        />
      </Box>

      <Box
        width={getNormalizedSizeWithPlatformOffset(180)}
        height={getNormalizedVerticalSizeWithPlatformOffset(120)}
        borderRadius={16}
        backgroundColor="purpleLight"
        ml="m"
        paddingHorizontal="s"
        paddingTop="m"
        shadowColor="purpleLight"
        shadowOffset={{
          height: 4,
          width: 4,
        }}
        shadowOpacity={0.4}
        shadowRadius={4}
        elevation={8}>
        <Text fontSize={18} color="white" fontWeight="700">
          Em progresso
        </Text>
        <Text marginTop="m" fontSize={16} color="white" fontWeight="500">
          2/5 Tarefas
        </Text>

        <Box
          mt="m"
          height={14}
          borderRadius={12}
          width={'100%'}
          backgroundColor="gray"
        />
      </Box>
    </Box>
  );
};

export default HeaderFlatList;
