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
import { CREATE_CHAT_ROOM } from '../../graphql/Mutation/create_chat_room'

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
  const [createChatRoom] = useMutation(CREATE_CHAT_ROOM)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const results = await createCategory()
      const { message, code, category } = results.data.createCategory
      console.log(results)
      setResult(message)

      if (code === '200') {
        const { id } = category

        const chatroom = await createChatRoom({
          variables: { categoryID: id },
        })

        const {
          code: statuscode,
          message: chatroommessage,
        } = chatroom.data.createChatRoom

        if (statuscode === '200') {
          alert(`${message}\n${chatroommessage}`)
          navigate('../')
        }
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  const handleChange = event => {
    setName(event.target.value)
  }

  if (error) {
    return <div>There was an error! Contact the admin.</div>
  }

  return (
    <WelcomePage mt="4">
      <SignInContainer>
        <h3>Create Subreddit</h3>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="name"
            type="text"
            minLength="3"
            maxLength="12"
            autoFocus
            handleChange={e => handleChange(e)}
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
