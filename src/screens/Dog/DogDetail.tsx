import { useRoute } from '@react-navigation/native';
import { Box, Text, Image } from '@shyn123/rn-uikit';
import React from 'react';

const DogDetail = () => {
  const { params } = useRoute();
  console.log(params);
  return (
    <Box flex={1} m={10} bg="red">
      <Image source={{ uri: params.url }} w="100%" h={300} mb={30} />
      <Text size={25} mb={30} txtAlign="center" color="#fff">
        {params.name}
      </Text>
      <Box p={10}>
        <Box row mb={30}>
          <Text flex={1} size={18} color="#fff">
            BreedFor:
          </Text>
          <Text flex={2} size={18} color="#fff">
            {params.bred_for}
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18} color="#fff">
            Life span:
          </Text>
          <Text flex={2} size={18} color="#fff">
            {params.life_span}
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18} color="#fff">
            Origin:
          </Text>
          <Text flex={2} size={18} color="#fff">
            {params.origin}
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18} color="#fff">
            Temperament:
          </Text>
          <Text flex={2} size={18} color="#fff">
            {params.temperament}
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18} color="#fff">
            Height:
          </Text>
          <Text flex={2} size={18} color="#fff">
            76cm
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18} color="#fff">
            Weight:
          </Text>
          <Text flex={2} size={18} color="#fff">
            18kg - 30kg
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DogDetail;
