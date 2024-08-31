import { Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { IGlobalState } from '../store/reducers'
import React from 'react'

const ScoreCard = () => {
  const score = useSelector((state: IGlobalState) => state.score)
  const highScore = useSelector((state: IGlobalState) => state.highScore)
  return (
    <>
    <Heading as="h2" size="md" mt={5} mb={5}>
      Highest Score: {highScore}
      <br/>
      Current Score: {score}
    </Heading>
    </>
  )
}

export default ScoreCard
