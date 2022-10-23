import { Grid, Heading, Stack, Text } from '@chakra-ui/react';

const Market = (props: any) => {
  return (
    <Stack
    bgPosition={'center'}
    bgRepeat={'no-repeat'}
    width={props.width*0.87}
    height={props.height}
    bgImg={'https://theuniverse.mypinata.cloud/ipfs/QmYBJaacSHEH8R6oLPJV3xakCgbYqHBqxjw3PPtXgPAMPm'}
    bgClip={'border-box'}
  >
     <Stack
      alignItems={'center'}
      justifyContent={'center'}

      width={props.width*0.87}
      maxWidth={props.width*0.87 }
      minWidth={props.width*0.87 }
    >
    <Heading fontSize="6xl" marginBottom={20}  textAlign={'center'}>
  
      Awesome NFTs Art
    </Heading>
    </Stack>
    </Stack>
  );
};

export default Market;
