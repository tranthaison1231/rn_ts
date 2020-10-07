import DogCard from '@/components/Card/DogCard';
import { windowWidth } from '@/utils/dimension';
import { searchByName } from '@/utils/text';
import { useNavigation } from '@react-navigation/native';
import { Box } from '@shyn123/rn-uikit';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { useQuery } from 'react-query';

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
    width: windowWidth,
    justifyContent: 'center',
  },
});

const Dog = () => {
  const { navigate } = useNavigation();
  const { isLoading, data } = useQuery('dogs', () =>
    fetch(
      'https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json',
    ).then((res) => res.json()),
  );

  const [dogs, setDogs] = useState(data?.slice(0, 20) || []);

  const onChangeSearch = (query) => {
    setDogs(() => {
      return data?.slice(0, 20).filter((dog) => searchByName(dog.name, query));
    });
  };

  const renderContent = () => {
    if (isLoading) {
      return [...new Array(10)].map((e, index) => (
        <DogCard.Skeleton key={String(index)} />
      ));
    }
    return dogs.map((e, index) => (
      <DogCard
        key={String(index)}
        data={e}
        onPress={() =>
          navigate('DogDetail', {
            ...e,
          })
        }
      />
    ));
  };
  return (
    <Box flex={1} justify="center" align="center" bg="#fff">
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ margin: 10 }}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentScrollView}
      >
        {renderContent()}
      </ScrollView>
    </Box>
  );
};

export default Dog;
