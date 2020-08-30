import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button
} from "@chakra-ui/core"
import { Formik, Field } from "formik"
import React from "react"

import { useRegisterMutation } from "../../generated/graphql"

const RegisterPage: React.FC<> = () => {
  const [register, { loading, error }] = useRegisterMutation()

  if (loading) return null
  if (error) return <div>error</div>

  return (
    <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            variantColor="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default RegisterPage
