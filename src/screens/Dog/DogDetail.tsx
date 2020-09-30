import { useRoute } from '@react-navigation/native';
import { Box, Text, Image } from '@shyn123/rn-uikit';
import React from 'react';

const DogDetail = () => {
  const { params } = useRoute();
  console.log(params);
  return (
    <Box flex={1} m={10}>
      <Image source={{ uri: params.url }} w="100%" h={300} mb={30} />
      <Text size={25} mb={30} txtAlign="center">
        {params.name}
      </Text>
      <Box>
        <Box row mb={30}>
          <Text flex={1} size={18}>
            BreedFor:
          </Text>
          <Text flex={2} size={18}>
            {params.bred_for}
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18}>
            Life span:
          </Text>
          <Text flex={2} size={18}>
            {params.life_span}
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18}>
            Origin:
          </Text>
          <Text flex={2} size={18}>
            {params.origin}
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18}>
            Temperament:
          </Text>
          <Text flex={2} size={18}>
            {params.temperament}
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18}>
            Height:
          </Text>
          <Text flex={2} size={18}>
            76cm
          </Text>
        </Box>
        <Box row mb={30}>
          <Text flex={1} size={18}>
            Weight:
          </Text>
          <Text flex={2} size={18}>
            18kg - 30kg
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DogDetail;
