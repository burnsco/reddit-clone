import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { navigate } from '@reach/router'
import Select from 'react-select'
import { CustomButton } from '../../components/shared/CustomButton'
import FormInput from '../../components/shared/FormInput'
import { ButtonsBarContainer, SignInContainer, WelcomePage } from './styles'
import MainSpinner from '../../components/shared/FallBackSpinner'
import { GET_ALL_POSTS_QUERY } from '../../graphql/Query/all_posts'
import { SUBMIT_POST_MUTATION } from '../../graphql/Mutation/submit_post'
import { GET_CATEGORIES_QUERY } from '../../graphql/Query/categories'

function CreatePostPage() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [categoryID, setCategoryID] = useState('')

  const { loading, data } = useQuery(GET_CATEGORIES_QUERY)

  const [createPost, { error }] = useMutation(SUBMIT_POST_MUTATION, {
    update(
      cache,
      {
        data: {
          createPost: { createdPost },
        },
      }
    ) {
      const { posts } = cache.readQuery({ query: GET_ALL_POSTS_QUERY })
      cache.writeQuery({
        query: GET_ALL_POSTS_QUERY,
        data: { posts: posts.concat([createdPost]) },
      })
    },
    variables: { title, text, categoryID: categoryID.value },
  })

  if (loading) return <MainSpinner />

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const result = await createPost()
      const { message, code } = result.data.createPost

      if (code === '200') {
        alert(`${message}`)
        navigate('../')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleSelect = (categoryid) => {
    setCategoryID(categoryid)
    console.log(`Option selected: `, categoryid)
  }

  const handleChange = (event) => {
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

  const options = data.categories.map((option) => ({
    value: option.id,
    label: option.name,
  }))

  return (
    <WelcomePage>
      <SignInContainer>
        <h3>Create Post</h3>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="title"
            type="text"
            handleChange={(e) => handleChange(e)}
            value={title}
            label="Title"
            required
          />
          <FormInput
            name="text"
            type="text"
            handleChange={(e) => handleChange(e)}
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
            <CustomButton type="submit" style={{ width: `${100}%` }}>
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
