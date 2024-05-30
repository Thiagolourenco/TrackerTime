import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  getDay,
  startOfMonth,
  addMonths,
  subMonths,
  isToday,
  format,
} from 'date-fns';
import Icon from 'react-native-vector-icons/AntDesign';
import {ptBR} from 'date-fns/locale';

import {Box} from '../Box';
import {Text} from '../Text';
import {Button} from '../Button';

interface ICalendarComponent {
  onPressDay: (item: number) => void;
}

const CalendarComponent = ({onPressDay}: ICalendarComponent) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [daysArray, setDaysArray] = useState([]);

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const today = new Date();

  const updateDaysArray = (month: any) => {
    const currentMonthStart = startOfMonth(month);
    const startDayOfWeek = getDay(currentMonthStart);
    const daysInMonth = new Date(
      month.getFullYear(),
      month.getMonth() + 1,
      0,
    ).getDate();
    const newDaysArray: any = Array.from(
      {length: startDayOfWeek},
      (_, i) => null,
    );

    for (let i = 1; i <= daysInMonth; i++) {
      newDaysArray.push(i);
    }

    setDaysArray(newDaysArray as []);
  };

  useEffect(() => {
    updateDaysArray(currentMonth);
  }, [currentMonth]);

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    console.log('SELEXT', selectedDate);
    // setSelectedDate(selectedDate);
  };

  return (
    <Box>
      <Box
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        marginBottom="ll">
        <Button
          icon={<Icon name="left" size={16} color="#fff" />}
          onPress={handlePreviousMonth}
          buttonVariants="roudennd"
        />

        <Text fontSize={16} fontWeight="bold" color="black400">
          {format(currentMonth, 'MMMM yyyy', {locale: ptBR})}
        </Text>

        <Button
          icon={<Icon name="right" size={16} color="#fff" />}
          onPress={handleNextMonth}
          buttonVariants="roudennd"
        />
      </Box>

      <Box
        flexDirection="row"
        justifyContent="space-around"
        marginHorizontal="l">
        {daysOfWeek.map((item, key) => (
          <Text color="black400" fontWeight="600" fontSize={16} key={key}>
            {item}
          </Text>
        ))}
      </Box>
      <Box
        flexDirection="row"
        alignItems="flex-end"
        flexWrap="wrap"
        padding="sm"
        marginLeft="ml">
        {/** Ciar Component depois de Button, para ser global */}
        {daysArray.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={{
              backgroundColor: isToday(
                new Date(today.getFullYear(), today.getMonth(), item),
              )
                ? '#000000'
                : 'transparent',
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ccc',
              marginBottom: 10,
              marginHorizontal: 4,
            }}
            onPress={() => handleDayClick(item)}>
            <Text
              color={
                isToday(new Date(today.getFullYear(), today.getMonth(), item))
                  ? 'white'
                  : 'black400'
              }
              fontWeight="600"
              fontSize={16}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </Box>
    </Box>
  );
};

export default CalendarComponent;
