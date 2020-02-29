import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client'
import Spinner from '../../components/shared/FallBackSpinner'
import { navigate } from '@reach/router'

const SUBMIT_POST = gql`
  mutation SUBMIT_POST(
    $title: String!
    $url: String!
    $category: String!
    $author: String!
  ) {
    createPost(title: $title, url: $url, category: $category, author: $author) {
      title
      url
      category
      author
    }
  }
`

function CreatePostPage() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')

  const [post, { loading, error }] = useMutation(SUBMIT_POST, {
    variables: { title: title, url: url, category: category, author: author }
  })

  const handleSubmit = async event => {
    try {
      event.preventDefault()
      await post()
    } catch (error) {
      console.log(error)
    }
    navigate('../', { replace: true })
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
      setCategory(value)
    }
    if (name === 'author') {
      setAuthor(value)
    }
  }

  if (loading) return <Spinner />
  if (error) {
    console.log(error.error)
    return <h1>error</h1>
  }

  return (
    <WelcomePage>
      <SignInContainer>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='title'
            type='text'
            handleChange={handleChange}
            value={title}
            label='Title'
            required
          />
          <FormInput
            name='url'
            type='text'
            handleChange={handleChange}
            value={url}
            label='Url'
            required
          />
          <FormInput
            name='category'
            type='text'
            value={category}
            handleChange={handleChange}
            label='Category'
            required
          />
          <FormInput
            name='author'
            type='text'
            value={author}
            handleChange={handleChange}
            label='Username'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit' style={{ width: 100 + '%' }}>
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
