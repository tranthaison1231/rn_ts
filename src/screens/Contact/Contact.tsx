import ContactCard from '@/components/Card/ContactCard';
import CardInfo from '@/components/Modal/CardInfo';
import useToggle from '@/hooks/useToggle';
import { windowHeight } from '@/utils/dimension';
import { useNavigation } from '@react-navigation/native';
import Box from '@UIkit/Box';
import FAB from '@UIkit/FAB';
import Humburger from '@UIkit/Hamburger';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dialog, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { searchByName } from '@/utils/text';

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
  const contacts = useSelector((state: RootState) => state.contact.items);
  const theme = useTheme();
  const [visible, openModal, closeModal] = useToggle(false);
  const [id, setId] = useState('');
  const { navigate } = useNavigation();
  const [search, setSearch] = useState('');

  const handleChange = debounce((e) => {
    setSearch(e);
  }, 400);

  const handleSelect = (idCard) => {
    setId(idCard);
    openModal();
  };

  const addContact = () => {
    navigate('AddContact');
  };
  return (
    <>
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
            {contacts
              .filter((contact) => searchByName(contact.name, search))
              .map((e, index) => (
                <ContactCard
                  key={String(index)}
                  data={e}
                  onPress={handleSelect}
                />
              ))}
          </ScrollView>
          <FAB
            icon="plus"
            bottom={100}
            right={0}
            m={20}
            absolute
            bg={theme.colors.primary}
            onPress={addContact}
          />
        </Box>
      </Box>
      <Dialog visible={visible} onDismiss={closeModal}>
        <CardInfo data={contacts.find((item) => item.id === id)} />
      </Dialog>
    </>
  );
};

export default Contact;
