import React from 'react'
import styled from 'styled-components'
import star from './star.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25em;
  height: 25em;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 1em;
  box-shadow: 5px 5px 5px grey;

  justify-content: center;
  align-items: center;
`
const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const Image = styled.img`
  width: 90%;
  height: 50%;
`
const Star = styled.img`
  height: 1em;
  width: 1em;
`
const Card = ({ details }) => {
  console.log(details)
  const starRating = new Array(Math.ceil(details.rating)).fill()
  return (
    <Container onClick={() => (window.location = details.url)}>
      <h3>{details.name}</h3>
      <Flex>
        {starRating.map(el => (
          <Star src={star} />
        ))}
      </Flex>

      <Image src={details.image_url} />
      <h5>{`Reviews: ${details.review_count}`}</h5>
      <h5>{`Score: ${details.score.toFixed(2)}`}</h5>
    </Container>
  )
}

export default Card
