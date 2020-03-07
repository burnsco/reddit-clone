import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client'
import { navigate } from '@reach/router'

const SUBMIT_POST = gql`
  mutation SUBMIT_POST($title: String!, $url: String!, $categoryID: ID!) {
    createPost(data: { title: $title, url: $url, categoryID: $categoryID }) {
      code
      success
      message
    }
  }
`

function CreatePostPage() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [categoryID, setCategoryID] = useState('')

  const [createPost, { loading, error }] = useMutation(SUBMIT_POST, {
    variables: { title: title, url: url, categoryID: categoryID }
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const result = await createPost()

      const { message, code } = result.data.createPost

      if (code === '200') {
        alert(`${message}`)
        navigate('/r/all')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    if (name === 'title') {
      setTitle(value)
    }
    if (name === 'url') {
      setUrl(value)
    }
    if (name === 'category') {
      setCategoryID(value)
    }
  }

  if (loading) return <div>Loading</div>
  if (error) {
    console.log(error.error)
    return <h1>error</h1>
  }

  return (
    <WelcomePage>
      <SignInContainer>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="title"
            type="text"
            handleChange={handleChange}
            value={title}
            label="Title"
            required
          />
          <FormInput
            name="url"
            type="text"
            handleChange={handleChange}
            value={url}
            label="Url"
            required
          />
          <FormInput
            name="category"
            type="text"
            value={categoryID}
            handleChange={handleChange}
            label="Category"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit" style={{ width: 100 + '%' }}>
              {' '}
              Submit Post{' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    </WelcomePage>
  )
}

export default CreatePostPage
