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
import MainSpinner from '../../components/shared/FallBackSpinner'
import { GET_CATEGORIES_QUERY } from '../../graphql/Query/categories'
import { CREATE_CATEGORY_MUTATION } from '../../graphql/Mutation/submit_category'

function CreateCategoryPage() {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  const [createCategory, { loading, error }] = useMutation(
    CREATE_CATEGORY_MUTATION,
    {
      update(
        cache,
        {
          data: {
            createCategory: { createdCategory },
          },
        }
      ) {
        const { categories } = cache.readQuery({ query: GET_CATEGORIES_QUERY })
        cache.writeQuery({
          query: GET_CATEGORIES_QUERY,
          data: { categories: categories.concat([createdCategory]) },
        })
      },
      variables: { name },
    }
  )

  // TODO messed with the above function, check later if creation of new categories does not work

  if (loading) return <MainSpinner />

  if (error) {
    return <div>Error! Contact the Admin about this unacceptable event!</div>
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const results = await createCategory()

      const { message, code } = results.data.createCategory

      setResult(message)

      if (code === '200') {
        alert(`${message}`)
        navigate('../')
      }
    } catch (error) {
      return error
    }
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  if (loading) return <div>Loading</div>

  if (error) {
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
          {/* TODO make option to create moderators for the new subreddit */}
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
