// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const handleSubmit = event => {
    event.preventDefault()
<<<<<<< HEAD
    const value = usernameInputRef.current.value
    onSubmitUsername(value)
=======
    onSubmitUsername(username)
>>>>>>> 4dd82c9 (Added functionality to control the usernameInput)
  }

  const handleChange = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
    // setError(isLowerCase ? null : 'Username must be lowercase')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          id="usernameInput"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
