import React from "react"
import { useLoginMutation } from "../../generated/graphql"
import { Field, Formik,, FormikProps } from "formik"
import { Button, FormControl, Progress } from "@chakra-ui/core"

type LoginPageProps = {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const initialValues: LoginPageProps = { email: "", password: "" }

  const [loginUser, { loading, error }] = useLoginMutation()

  if (loading) return null

  if (error) {
    console.log(error)
  }

  const validateEmail = ({values}: FormikProps<LoginPageProps>) => {
      const errors = { email: "", password: "" }
      if (!values.email) {
        errors.email = "Required"
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address"
      }
      return errors
    }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values: LoginPageProps, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
        await loginUser({
          variables: { email: values.email, password: values.password }
        })
      }}
    >
      {({ handleSubmit , handleBlur, handleChange,  values, errors}) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
            </FormControl>
            </Field>
         
          <input />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button
            type="submit"
            loadingText="Submitting"
            variantColor="teal"
            variant="outline"
            isLoading={!isSubmitting}
          >
            Submit
          </Button>
        </form>
      )}
      <Progress hasStripe isAnimated={!loading} value={100} />
    </Formik>
  )
}

export default LoginPage
