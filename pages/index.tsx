import { Box, Grid, Text, VStack, Image } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Layout } from '../components/Layout';

const IndexPage: FunctionComponent = () => (
  <Layout title="Breakthrough Healing">
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} mt="5vh">
        <VStack spacing={[2, 4]}>
          <Text
            fontFamily="natural"
            fontSize={['3.2rem', '4rem', '5rem']}
            lineHeight={1}
          >
            Breakthrough Healing
          </Text>
          <Image src="/img/splash.png" alt="Photo of Dr. Juliana King" />
          <Text
            fontFamily="natural"
            fontStyle="italic"
            fontSize={['1.5rem']}
            lineHeight={1}
            pt={2}
          >
            By Dr. Juliana King, DACM
          </Text>
          <Text pt={8}>Website currently under construction</Text>
        </VStack>
      </Grid>
    </Box>
  </Layout>
);

export default IndexPage;
