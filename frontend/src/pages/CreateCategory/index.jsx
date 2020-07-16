import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { navigate } from '@reach/router'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage, WarningMessage } from './styles'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { CREATE_CATEGORY_MUTATION } from './mutation'
import { GET_CATEGORIES_QUERY } from '../../components/Categories/query'

function CreateCategoryPage() {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY_MUTATION, {
    update(cache, { data: { createCategory } }) {
      const { categories } = cache.readQuery({ query: GET_CATEGORIES_QUERY })
      cache.writeQuery({
        query: GET_CATEGORIES_QUERY,
        data: { categories: categories.concat([createCategory]) },
      })
    },
    variables: { name },
  })

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>Error!</div>
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const result = await createCategory()
      console.log(result)
      const { message, code } = result.data.createCategory
      setResult(message)
      if (code === '200') {
        alert(`${message}`)
        navigate('../')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = event => {
    setName(event.target.value)
  }

  if (loading) return <div>Loading</div>

  if (error) {
    console.log(error.error)
    return <h1>error</h1>
  }

  return (
    <WelcomePage>
      <SignInContainer>
        <h3>Create Subreddit</h3>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="name"
            type="text"
            handleChange={e => handleChange(e)}
            value={name}
            label="name"
            required
          />
          <WarningMessage>{result}</WarningMessage>
          {/* TODO make option to create moderators for the new subreddit */}
          <ButtonsBarContainer>
            <CustomButton type="submit" style={{ width: `${100}%` }}>
              {' '}
              Submit{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    </WelcomePage>
  )
}

export default CreateCategoryPage
