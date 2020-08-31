import { Box, Button } from "@chakra-ui/core"
import { Form, Formik } from "formik"
import React from "react"
import { InputField } from "../../components/InputField/InputField"
import {
  CurrentUserDocument,
  CurrentUserQuery,
  CurrentUserQueryResult,
  useRegisterMutation
} from "../../generated/graphql"

const RegisterPage: React.FC = () => {
  const [registerMutation,  { loading, error }] = useRegisterMutation()

  if (loading) return null
  if (error) return <div>error</div>

  return (
    <Formik
      initialValues={{ username: "", password: "", email: "" }}
      onSubmit={async (values) => {
        await registerMutation({
          variables: {
            username: values.username,
            password: values.password,
            email: values.email
          },
          update: (cache, { data }) => {
            cache.writeQuery<CurrentUserQuery | undefined>({
              query: CurrentUserDocument,
              data: {
                __typename: 'Query',
                currentUser: data?.createUser.user?.username
              }
            })
          }
        })
      
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField name="email" placeholder="email" label="Email" />
          <Box my="2">
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
          </Box>
          <Box my="4">
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
          </Box>
          <Button
            mt={4}
            variantColor="red"
            type="submit"
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterPage
