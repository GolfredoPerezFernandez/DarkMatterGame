
import { Grid, GridItem } from '@chakra-ui/react';

const Blog = () => {
  return (
    <Grid h="400px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem rowSpan={2} colSpan={1} bg="red"></GridItem>
      <GridItem colSpan={2} bg="blue" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={4} bg="tomato" />
    </Grid>
  );
};

export default Blog;
