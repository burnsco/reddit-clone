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

function CreateCategoryPage() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [categoryID, setCategoryID] = useState('')

  const { loading, data } = useQuery(GET_CATEGORIES)

  const [createCategory, { error }] = useMutation(SUBMIT_POST, {
    variables: { title: title, text: text, categoryID: categoryID.value }
  })

  if (loading) return <MainSpinner />

  if (error) {
    console.log(error)
    return <div>Error!</div>
  }

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
          {/* 
          <label>
            Category
            <br /> */}
          {/* <select
              name="categoryID"
              value={categoryID}
              onChange={e => handleChange(e)}
            >
              {data.categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label> */}

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
