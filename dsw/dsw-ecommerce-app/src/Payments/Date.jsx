import React from 'react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Heading,
    Text,
  } from '@chakra-ui/react'
function Date() {
  return (
    <div>
        <span>
        <Text>Expiry Month</Text>
         <NumberInput size='md' maxW={24} defaultValue={1} min={1}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
        </span>
      
        <span>
        <Text>Expiry Year</Text>
         <NumberInput size='md' maxW={24} defaultValue={2023} min={1}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
        </span>
    </div>
  )
}

export default Date