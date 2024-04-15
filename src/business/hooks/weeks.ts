import { startOfWeek, add, format, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useMemo, useState } from 'react';

export default function useWeek() {
  const [week, setWeek] = useState(0);


  const weeks = useMemo(() => {
    const start = startOfWeek(new Date(), { weekStartsOn: 1 });
    const dateActual = new Date()

    return  Array.from({ length: 7 }).map((_, index) => {
      const date = add(start, { days: index });

      console.log( "IS", dateActual)

      return {
        weekday: format(date, 'EEEEEE', { locale: ptBR }),
        date: format(date, "dd"),
        isSelected: isToday(date)
      };
    });

  }, []);

  return { weeks }
  
}
