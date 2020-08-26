import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import SearchForm from './SearchForm'
import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`
const Body = styled.div`
  width: 80%;
  height: 100%;
  padding: 4em;
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
`

//score = ( number of reviews * rating ) / (number of reviews + 1)
function App () {
  const [responseData, changeResponseData] = useState([])
  const handleSearchFormSubmit = value => {
    const axiosValue = axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
        {
          headers: {
            Authorization:
              'Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx'
          },
          params: {
            location: value,
            categories: 'parking'
          }
        }
      )
      .then(response => {
        changeResponseData(
          response.data.businesses
            .map(business => {
              business.score =
                (business.review_count * business.rating) /
                (business.review_count + 1)
              return business
            })
            .sort((a, b) => a.score - b.score)
        )
      })
  }
  console.log('??', responseData)

  return (
    <div className='App'>
      <Wrapper>
        <Body>
          <h1>Lowest Rating Parking Lots Coding Challenge </h1>

          <SearchForm handleSearchFormSubmit={handleSearchFormSubmit} />
          <CardContainer>
            {responseData.map(business => (
              <Card details={business} />
            ))}
          </CardContainer>
        </Body>
      </Wrapper>
    </div>
  )
}

export default App
