import { Box, Button, Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'
function SkeletonFun() {
    const [isLoaded, setIsLoaded] = React.useState(false)
    return (
      <Stack padding={4} spacing={1}>
        <Skeleton height='40px' isLoaded={isLoaded}>
          <Box>Hello World!</Box>
        </Skeleton>
        <Skeleton
          height='40px'
          isLoaded={isLoaded}
          bg='green.500'
          color='white'
          fadeDuration={1}
        >
          <Box>Hello React!</Box>
        </Skeleton>
        <Skeleton
          height='40px'
          isLoaded={isLoaded}
          fadeDuration={4}
          bg='blue.500'
          color='white'
        >
          <Box>Hello ChakraUI!</Box>
        </Skeleton>
  
        <Box textAlign='center'>
          {/* <Button onClick={() => setIsLoaded((v) => !v)}></Button> */}
        </Box>
      </Stack>
    )
  }
  export default SkeletonFun