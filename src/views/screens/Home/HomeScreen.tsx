import React, {useState} from 'react';
import {FlatList, Image, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AddTask, Box, Text, Button} from '../../components';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import {RoutesNavigationBottomTab} from '../../../@types';
import Card from './Card.component';
import HeaderFlatList from './HeaderFlatList.component';

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

  const {navigate, setParams} = useNavigation<PropsNavigation>();

  const handleOpenBottomSheet = () => {
    setIsOpenBottomSheet(true);
    setParams({isBottomSheet: true}); // TIPAR
  };

  const handleCloseBottomSheet = () => {
    setIsOpenBottomSheet(false)
    setParams({isBottomSheet: false}); // TIPAR
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{height: '100%'}}>
        <Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginHorizontal="m">
            <Box flexDirection="row" alignItems="center">
              <Image
                source={require('../../../assets/image/Profile.jpeg')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
              <Text ml="sm">Olá, Thiago</Text>
            </Box>

            <Button
              icon={<Icon name="plus" color="#ffffff" size={12} />}
              onPress={handleOpenBottomSheet}
              buttonVariants="circlePrimary"
            />
          </Box>

          <FlatList
            style={{height: '100%', paddingHorizontal: 16}}
            data={DATA}
            ListHeaderComponent={<HeaderFlatList />}
            renderItem={({item}) => (
              <Card item={item} onNavigate={() => navigate('PomodoroScreen')} />
            )}
          />
        </Box>

        {isOpenBottomSheet && (
          <BottomSheet
            title="Criar Tarefa"
            onClose={handleCloseBottomSheet}
            children={<AddTask />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
