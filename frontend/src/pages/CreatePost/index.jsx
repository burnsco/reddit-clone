import React, { useState } from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import { useMutation } from '@apollo/client'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { useQuery } from '@apollo/client'
import { navigate } from '@reach/router'
import Select from 'react-select'
import { SUBMIT_POST } from './mutation'
import { GET_CATEGORIES } from './query'
import { GET_ALL_POSTS_QUERY } from '../../components/PostList/AllPosts/query'

function CreatePostPage() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [categoryID, setCategoryID] = useState('')

  const { loading, data } = useQuery(GET_CATEGORIES)

  const [createPost, { error }] = useMutation(SUBMIT_POST, {
    update(cache, { data: { createPost } }) {
      const { posts } = cache.readQuery({ query: GET_ALL_POSTS_QUERY })
      cache.writeQuery({
        query: GET_ALL_POSTS_QUERY,
        data: { posts: posts.concat([createPost]) },
      })
    },
    variables: { title: title, text: text, categoryID: categoryID.value },
  })

  if (loading) return <MainSpinner />

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const result = await createPost()
      console.log('post result')
      console.log(result)
      const { message, code } = result.data.createPost

      if (code === '200') {
        alert(`${message}`)
        navigate('../')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleSelect = categoryID => {
    setCategoryID(categoryID)
    console.log(`Option selected: `, categoryID)
  }

  const handleChange = event => {
    const { value, name } = event.target

    if (name === 'title') {
      setTitle(value)
    }

    if (name === 'text') {
      setText(value)
    }
  }

  if (loading) return <div>Loading</div>

  if (error) {
    console.log(error.error)
    return <h1>error</h1>
  }

  const options = data.categories.map(option => {
    return { value: option.id, label: option.name }
  })

  return (
    <WelcomePage>
      <SignInContainer>
        <h3>Create Post</h3>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="title"
            type="text"
            handleChange={e => handleChange(e)}
            value={title}
            label="Title"
            required
          />
          <FormInput
            name="text"
            type="text"
            handleChange={e => handleChange(e)}
            value={text}
            label="Text"
          />

          <Select
            name="categoryID"
            value={categoryID}
            options={options}
            onChange={handleSelect}
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
