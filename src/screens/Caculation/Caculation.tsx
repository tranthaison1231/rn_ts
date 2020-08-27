import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '../../components/UIkit/Box';
import Form from './Form';
import { nanoid } from '@reduxjs/toolkit';
import { formatNumber } from '../../utils/number';

const Caculation = ({ navigation }) => {
  const [items, setItems] = useState([]);

  const onSubmit = ({ a, b, c }) => {
    const denta = b * b - 4 * a * c;
    const question = `${a}x^2 + ${b}x + ${c}`;
    let answer = '';
    let x1, x2;
    if (denta < 0) {
      answer = 'Phương trình vô nghiệm';
    }
    if (denta === 0) {
      x1 = (-b / 2) * a;
      answer = `x1 = ${formatNumber(x1, 2)}, x2 = ${formatNumber(x1, 2)}`;
    }
    if (denta > 0) {
      x1 = (-b + Math.sqrt(denta)) / (2 * a);
      x2 = (-b - Math.sqrt(denta)) / (2 * a);
      answer = `x1 = ${formatNumber(x1, 2)}, x2 = ${formatNumber(x2, 2)}`;
    }

    setItems((current) => [
      ...current,
      {
        id: nanoid(),
        question,
        answer,
      },
    ]);
  };

  return (
    <Box as={SafeAreaView} p={20}>
      <Form onSubmit={onSubmit} />
      <Box mt={30} as={ScrollView}>
        {items.map((item) => (
          <Box
            p={2}
            mb={5}
            key={item.id}
            boxShadow={2}
            bg="#fff"
            as={TouchableOpacity}
            onLongPress={() =>
              setItems((currentItems) =>
                currentItems.filter((e) => e.id !== item.id),
              )
            }
            onPress={() =>
              navigation.navigate('History', {
                item: item,
              })
            }
          >
            <List.Item title={item.question} description={item.answer} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Caculation;
