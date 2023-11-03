import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { currentUser, logOut } = useAuth()
  // user id = currentUser.sub

  return (
    <>
      <MetaTags title="DaddyDo" description="DaddyDo home page" />

      <h1>DaddyDo</h1>
      {currentUser ? (
        <div>
          <button onClick={() => logOut()}>Log out</button>
        </div>
      ) : (
        <div>
          <div>
            <Link to={routes.login()}>Log in</Link>
          </div>
          <div>
            <Link to={routes.signup()}>Create account</Link>
          </div>
        </div>
      )}
    </>
  )
}

export default HomePage
