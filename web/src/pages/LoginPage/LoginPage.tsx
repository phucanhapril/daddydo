import { Form, PasswordField, Submit, TextField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { logIn } = useAuth() // https://redwoodjs.com/docs/auth/supabase#sign-up-with-email-and-password
  const [error, setError] = React.useState(null)

  const onSubmit = async (data) => {
    try {
      const response = await logIn({
        authMethod: 'password',
        email: data.email,
        password: data.password,
      })
      if (response?.error?.message) {
        setError(response.error.message)
      } else {
        navigate(routes.home())
      }
    } catch (error) {
      console.log('error:  ', error)
      setError(error.message)
    }
  }

  return (
    <>
      <MetaTags title="DaddyDo - Login" description="DaddyDo login page" />

      <h1>Log In</h1>
      <Form onSubmit={onSubmit}>
        <div>
          <TextField name="email" placeholder="email" />
        </div>
        <div>
          <PasswordField name="password" placeholder="password" />
        </div>
        <div>{error && <p>{error}</p>}</div>
        <div>
          <Submit>Log in</Submit>
        </div>
      </Form>
      <div>
        <Link to={routes.home()}>Back to homepage</Link>
      </div>
    </>
  )
}

export default LoginPage
