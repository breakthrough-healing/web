import {
  Box,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ElementType, FunctionComponent } from 'react';
import { SiInstagram, SiMailDotRu } from 'react-icons/si';
import { Layout } from '../components/Layout';

const SocialLink: FunctionComponent<{
  href: string;
  label: string;
  text: string;
  icon: ElementType;
}> = ({ href, label, text, icon }) => (
  <Link href={href}>
    <Icon as={icon} aria-label={label} mr={1} />
    {text}
  </Link>
);

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
          <Flex pt={2}>
            <Text pr={3}>Contact me:</Text>
            <Stack textAlign="left">
              <SocialLink
                href="https://www.instagram.com/drjulianaking"
                icon={SiInstagram}
                text="drjulianaking"
                label="instagram"
              />
              <SocialLink
                href="mailto:julianadejongh@gmail.com"
                icon={SiMailDotRu}
                text="email"
                label="email"
              />
            </Stack>
          </Flex>
          <Text pt={8}>Website currently under construction</Text>
        </VStack>
      </Grid>
    </Box>
  </Layout>
);

export default IndexPage;
