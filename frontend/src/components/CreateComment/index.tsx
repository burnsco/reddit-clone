import React from 'react'
import PropTypes from 'prop-types'
import { useCreateCommentMutation } from '../../generated/graphql'
import { useNavigate } from '@reach/router'
import { Box, Button } from '@chakra-ui/core'
import { Formik } from 'formik'

const CreateCommentForm: React.FC<{ postID: string }> = ({ postID }) => {
  const navigate = useNavigate()
  const [createComment, { loading, error, data }] = useCreateCommentMutation()

  if (loading) return null

  if (error) {
    console.log(error)
  }

  return (
    <Box mx={[2, 3]}>
      <Formik
        initialValues={{ body: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false)
          createComment({
            variables: { body: values.body, postID: postID }
          })
          if (data?.createComment.success) {
            navigate('../', { replace: true })
          }
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            />
            {errors.body}

            <Button mt={2} type="submit" isLoading={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  )
}

CreateCommentForm.propTypes = {
  postID: PropTypes.string.isRequired
}

export default CreateCommentForm
