import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { useMutation } from '@apollo/client'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { useQuery } from '@apollo/client'
import { navigate } from '@reach/router'
import Select from 'react-select'
import { CREATE_CATEGORY_MUTATION } from './mutation'

function CreateCategoryPage() {
  const [name, setName] = useState('')

  const [createCategory, { loading, error }] = useMutation(
    CREATE_CATEGORY_MUTATION,
    {
      variables: { name: name }
    }
  )

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>Error!</div>
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const result = await createCategory()
      const { message, code } = result.data.createCategory

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
          {/* TODO make option to create moderators for the new subreddit */}
          <ButtonsBarContainer>
            <CustomButton type="submit" style={{ width: 100 + '%' }}>
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
