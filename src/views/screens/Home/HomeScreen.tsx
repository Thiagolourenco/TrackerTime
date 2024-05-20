import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AddTask, Box, Text, Button} from '../../components';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import {
  getNormalizedSizeWithPlatformOffset,
  getNormalizedVerticalSizeWithPlatformOffset,
} from '../../../helpers/pixelPerfect';
import {RoutesNavigationBottomTab} from '../../../@types';

const Data = [0, 1, 2, 3];

type PropsNavigation = StackNavigationProp<
  RoutesNavigationBottomTab,
  'PomodoroScreen'
>;

export default () => {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState<boolean>(false);

  const {navigate} = useNavigation<PropsNavigation>();

  const handleOpen = () => {
    setIsOpenBottomSheet(true);
  };

  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <Box marginHorizontal="m">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Box flexDirection="row" alignItems="center">
              <Box
                width={50}
                height={50}
                borderRadius={25}
                backgroundColor="mainBackground"
              />
              <Text ml="sm">Olá, Thiago</Text>
            </Box>

            <Button
              icon={<Icon name="plus" color="#ffffff" size={12} />}
              onPress={handleOpen}
              buttonVariants="circlePrimary"
            />
          </Box>

          <Box flexDirection="row" mt="xl" mb="m">
            <Box
              width={getNormalizedSizeWithPlatformOffset(150)}
              height={getNormalizedVerticalSizeWithPlatformOffset(150)}
              borderRadius={16}
              backgroundColor="cardPrimaryBackground"
            />

            <Box
              width={getNormalizedSizeWithPlatformOffset(180)}
              height={getNormalizedVerticalSizeWithPlatformOffset(150)}
              borderRadius={16}
              backgroundColor="cardPrimaryBackground"
              ml="m"
            />
          </Box>

          <FlatList
            style={{height: '100%'}}
            data={Data}
            renderItem={() => (
              <Box
                width={'100%'}
                height={80}
                backgroundColor="mainBackground"
                borderRadius={16}
                mt="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                paddingHorizontal="l">
                <Box>
                  <Text>Nome da tarefa</Text>
                  <Text>Prioridade</Text>
                </Box>

                <Button
                  icon={<Icon name="play" size={14} color="#FFFFFF" />}
                  onPress={() => navigate('PomodoroScreen')}
                  buttonVariants="circlePrimary"
                />
              </Box>
            )}
          />
        </Box>

        {isOpenBottomSheet && (
          <BottomSheet
            title="Criar Tarefa"
            onClose={() => setIsOpenBottomSheet(false)}
            children={<AddTask />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
