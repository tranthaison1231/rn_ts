import ContactCard from '@/components/Card/ContactCard';
import { windowHeight } from '@/utils/dimension';
import Box from '@UIkit/Box';
import FAB from '@UIkit/FAB';
import Humburger from '@UIkit/Hamburger';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { onChangeAlias } from '@/utils/text';
import { debounce } from 'lodash';

const DATA = [
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Nhật',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Nhật',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Sơn',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Tony Stack',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Nhật',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Tony',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Hoàng DB',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Hoàng DB',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Hoàng DB',
    phoneNumber: '0915520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Kiki',
    phoneNumber: '0912520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Hoàng DB',
    phoneNumber: '0913520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Hoàng DB',
    phoneNumber: '0914520981',
  },
  {
    avatar: 'https://baseline-stg-api.herokuapp.com/images/80924.jpg',
    name: 'Hoàng DB',
    phoneNumber: '0915620981',
  },
];

const styles = StyleSheet.create({
  scrollView: {
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    backgroundColor: '#fff',
    height: '100%',
  },
  contentScrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '83%',
  },
});

const Contact = () => {
  const [items, setItems] = useState(DATA);
  const theme = useTheme();

  const handleChange = debounce((e) => {
    setItems(() =>
      DATA.filter((item) =>
        onChangeAlias(item.name).includes(onChangeAlias(e)),
      ),
    );
  }, 400);
  return (
    <Box as={SafeAreaView} h={windowHeight} bg={theme.colors.primary}>
      <Box>
        <Box m={10} mb={20} row align="flex-end" justify="space-between">
          <Humburger size={56} color={theme.colors.primary} />
          <TextInput
            mode="outlined"
            style={styles.input}
            onChangeText={handleChange}
            placeholder="Search contact"
            left={<TextInput.Icon name="magnify" size={25} color="#999" />}
          />
        </Box>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentScrollView}
        >
          {items.map((e, index) => (
            <ContactCard key={String(index)} data={e} />
          ))}
        </ScrollView>
        <FAB
          icon="plus"
          bottom={50}
          right={0}
          m={20}
          absolute
          bg={theme.colors.primary}
          onPress={() => console.log('Pressed')}
        />
      </Box>
    </Box>
  );
};

export default Contact;
