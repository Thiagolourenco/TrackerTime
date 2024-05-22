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
import Card from './Card.component';

Icon.loadFont();

type PropsNavigation = StackNavigationProp<
  RoutesNavigationBottomTab,
  'PomodoroScreen'
>;

const DATA = [
  {
    id: 1,
    name: 'Criar Tela da Home',
    status: 'in_progress',
    hour: '10:00 à 12:00',
  },
  {
    id: 2,
    name: 'Estudar Ingles',
    status: 'is_not_init',
    hour: '13:00 à 14:00',
  },
  {
    id: 3,
    name: 'Criar Serviço do backend',
    status: 'conclued',
    hour: '14:20 à 16:00',
  },
];

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
              height={getNormalizedVerticalSizeWithPlatformOffset(120)}
              borderRadius={16}
              paddingHorizontal="s"
              paddingTop="m"
              backgroundColor="mainBackground">
              <Text fontSize={18} color="black400" fontWeight="700">
                Tarefas de Hoje
              </Text>
              <Text
                marginTop="m"
                fontSize={16}
                color="black400"
                fontWeight="500">
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
              paddingTop="m">
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

          <FlatList
            style={{height: '100%'}}
            data={DATA}
            renderItem={({item}) => (
              <Card item={item} onNavigate={() => navigate('PomodoroScreen')} />
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
