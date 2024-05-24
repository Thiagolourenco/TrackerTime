import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Text} from '../../components';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../../helpers/pixelPerfect';

interface ILogout {
  onClose: () => void;
}

const Logout = ({onClose}: ILogout) => {
  return (
    <Box>
      <Text fontSize={16} fontWeight="bold" color="white" textAlign="center">
        Deseja realmente sair ?
      </Text>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        mt="ll">
        <TouchableOpacity activeOpacity={0.8} onPress={onClose}>
          <Box
            backgroundColor="purpleLight"
            height={getNormalizedVerticalSizeWithPlatformOffset(45)}
            width={getNormalizedSizeWithPlatformOffset(150)}
            borderRadius={8}
            justifyContent="center"
            alignItems="center">
            <Text color="white" fontWeight="500" fontSize={16}>
              Cancelar
            </Text>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Box
            backgroundColor="purplePrimary"
            height={getNormalizedVerticalSizeWithPlatformOffset(45)}
            width={getNormalizedSizeWithPlatformOffset(150)}
            borderRadius={8}
            justifyContent="center"
            alignItems="center">
            <Text fontWeight="bold" fontSize={16} color="white">
              Sair
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default Logout;
