import React, { useState } from 'react';
import { Box, Button } from '@shyn123/rn-uikit';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';

const Shop = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <Box>
      <Box>
        <Button onPress={showDatepicker}>Show date picker!</Button>
      </Box>
      <Box>
        <Button onPress={showTimepicker}>Show time picker! </Button>
      </Box>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </Box>
  );
};

export default Shop;
