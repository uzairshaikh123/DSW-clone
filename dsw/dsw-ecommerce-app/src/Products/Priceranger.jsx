import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Box,
  } from '@chakra-ui/react'


import React from 'react'

function Priceranger() {
  return (
    <div><RangeSlider aria-label={['min', 'max']} defaultValue={[30, 80]}>
    <RangeSliderTrack bg='red.100'>
      <RangeSliderFilledTrack bg='tomato' />
    </RangeSliderTrack>
    <RangeSliderThumb boxSize={6} index={0}>
      <Box color='tomato'/>
    </RangeSliderThumb>
    <RangeSliderThumb boxSize={6} index={1}>
      <Box color='tomato'/>
    </RangeSliderThumb>
  </RangeSlider></div>
  )
}

export default Priceranger
