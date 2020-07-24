/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { navigate } from '@reach/router'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import {
  ButtonsBarContainer,
  SignInContainer,
  WelcomePage,
  WarningMessage,
} from './styles'
import { GET_CATEGORIES_QUERY } from '../../graphql/Query/categories'
import { CREATE_CATEGORY_MUTATION } from '../../graphql/Mutation/submit_category'

function CreateCategoryPage() {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  const [createCategory, { error }] = useMutation(CREATE_CATEGORY_MUTATION, {
    update(cache, { data: { createCategory } }) {
      const { categories } = cache.readQuery({ query: GET_CATEGORIES_QUERY })
      cache.writeQuery({
        query: GET_CATEGORIES_QUERY,
        data: { categories: categories.concat([createCategory]) },
      })
    },
    variables: { name },
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const results = await createCategory()
      console.log('create category ==>')
      console.log(results)
      const { message, code } = results.data.createCategory

      setResult(message)

      if (code === '200') {
        alert(`${message}`)
        navigate('../')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  if (error) {
    console.log('create category page error =>')
    console.log(error)
    return <div>There was an error! Contact the admin.</div>
  }

  return (
    <WelcomePage>
      <SignInContainer>
        <h3>Create Subreddit</h3>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="name"
            type="text"
            handleChange={(e) => handleChange(e)}
            value={name}
            label="name"
            required
          />
          <WarningMessage>{result}</WarningMessage>

          <ButtonsBarContainer>
            <CustomButton type="submit" style={{ width: `${100}%` }}>
              Submit
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    </WelcomePage>
  )
}

export default CreateCategoryPage
