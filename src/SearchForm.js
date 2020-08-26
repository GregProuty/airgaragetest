import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Form = styled.form`
  width: 80%;
`
const Input = styled.input`
  width: 100%;
  height: 3em;
`

const SearchForm = ({ handleSearchFormSubmit }) => {
  const [searchValue, changeSearchValue] = useState('')
  console.log(searchValue)
  return (
    <Container>
      <Form
        onSubmit={e => {
          e.preventDefault()
          handleSearchFormSubmit(searchValue)
        }}
      >
        <Input onChange={e => changeSearchValue(e.target.value)} />
      </Form>
    </Container>
  )
}

export default SearchForm
