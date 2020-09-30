import DogCard from '@/components/Card/DogCard';
import { useNavigation } from '@react-navigation/native';
import { Box } from '@shyn123/rn-uikit';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
    justifyContent: 'center',
  },
});

const Dog = () => {
  const { navigate } = useNavigation();
  const { isLoading, data } = useQuery('repoData', () =>
    fetch(
      'https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json',
    ).then((res) => res.json()),
  );

  const renderContent = () => {
    if (isLoading) {
      return [...new Array(10)].map((e, index) => (
        <DogCard.Skeleton key={String(index)} />
      ));
    }
    return data?.slice(0, 20).map((e, index) => (
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
