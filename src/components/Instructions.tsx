import { Box, Button, Flex, Heading, Kbd } from '@chakra-ui/react'
import React from 'react'

export interface IInstructionProps {
  resetBoard: () => void
}
const Instruction = ({ resetBoard }: IInstructionProps) => (
  <Box mt={3} className='instruction-box'>
    <Heading as="h6" size="lg">
      How to Play
    </Heading>
    <Heading as="h5" size="sm" mt={1}>
      NOTE: Start the game by pressing any arrow key
    </Heading>
    <Flex flexDirection="column" mt={3}>
      <Flex flexDirection={'column'}>
        <span>
          <Kbd>ArrowUp</Kbd> Move Up
        </span>
        <span>
          <Kbd>ArrowLeft</Kbd> Move Left
        </span>
        <span>
          <Kbd>ArrowDown</Kbd> Move Down
        </span>
        <span>
          <Kbd>ArrowRight</Kbd> Move Right
        </span>
      </Flex>
      <Flex flexDirection="column" ml={5} margin={4}>
        <Button onClick={() => resetBoard()}>Reset game</Button>
      </Flex>
    </Flex>
  </Box>
)

export default Instruction
