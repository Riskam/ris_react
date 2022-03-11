import Link from "next/link";
import image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkname,
  buttonText,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fomtweight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1} <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkname}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);
export default function Home() {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkname="/search?purpose=for-rent"
        buttonText="Explore Renting"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy $ Own your"
        title2="Dream HOME"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkname="/search?purpose=for-sale"
        buttonText="Explore Buying"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </div>
  );
}
