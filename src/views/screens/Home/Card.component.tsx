import React from 'react';
import {Box, Text, Button} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../theme/theme';

Icon.loadFont();

interface ICard {
  item: any;
  onNavigate: () => void;
}

interface IValidedStatus {
  [key: string]: {
    backgroundColor: string;
    text: string;
  };
}

const isValidaStatus: IValidedStatus = {
  conclued: {
    backgroundColor: theme.colors.badgeConclued,
    text: 'Concluído',
  },
  is_not_init: {
    backgroundColor: theme.colors.badgeIsNotInit,
    text: 'não iniciada',
  },
  in_progress: {
    backgroundColor: theme.colors.badgeInProgress,
    text: 'Em progresso',
  },
};

const Card = ({item, onNavigate}: ICard) => {
  const status = isValidaStatus[item.status];

  return (
    <Box
      width={'100%'}
      paddingVertical="m"
      backgroundColor="mainBackground"
      borderRadius={16}
      mt="m"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      shadowColor="textColorGray"
      shadowOffset={{
        height: 4,
        width: 4,
      }}
      shadowOpacity={1}
      shadowRadius={8}
      elevation={8}
      paddingHorizontal="l">
      <Box>
        <Box
          style={{backgroundColor: status.backgroundColor}}
          height={20}
          width={100}
          justifyContent="center"
          alignItems="center"
          borderRadius={4}
          mb="m">
          <Text color="white" fontWeight="bold" fontSize={10}>
            {status.text}
          </Text>
        </Box>
        <Text>{item.name}</Text>
        <Text style={{marginTop: 2}} color="background" fontWeight="600">
          {item.hour}
        </Text>
      </Box>

      <Button
        icon={<Icon name="play" size={14} color="#FFFFFF" />}
        onPress={onNavigate}
        buttonVariants="circlePrimary"
      />
    </Box>
  );
};

export default Card;
