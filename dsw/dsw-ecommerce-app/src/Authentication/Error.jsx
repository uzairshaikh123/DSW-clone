import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function Error() {
  return (
    <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>
  )
}

export default Error


