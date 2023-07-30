import {
    Box,
    Container,
    Text,
    VStack
} from '@chakra-ui/react'

const Home = () => {
    return (
      <Box>
          <VStack>
              <Text>
                I&apos;m Sabrina, the <Text as="s">teenage</Text> 25 year-old <Text as="s">witch</Text> UI Engineer with a magic touch.
              </Text>
              <Text> 
                Welcome to my cyber sanctuary where I showcase what I've conjured and crafted on my electronic cauldron.
              </Text>
              <Text> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
          </VStack>
      </Box>
    )
}

export default Home