
  import { MdLocalShipping } from 'react-icons/md';
  import { useState } from 'react';
  import { ReactElement } from 'react';
  import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
  import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
  
  interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
  }


const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };
  
  export default function MoreInfo() {
    return (
      <Box p={4}>
        <hr />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Lifetime Support'}
            text={
              "If you are facing any kind of issues then contact us 1800 1800 1800"
            }
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Cash on Delivery'}
            text={
              'Cash on Delivery is also available'
            }
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Instant Delivery'}
            text={
              'Instant Delivery is also available for VIP users'
            }
          />
        </SimpleGrid>
        <hr />
      </Box>
    );
  }