// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// Extra Credit 1
// function UsernameForm({onSubmitUsername}) {
//   const inputEl = React.useRef(null)

//   const handleSubmit = event => {
//     event.preventDefault()
//     const userName = inputEl.current.value
//     onSubmitUsername(userName)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={inputEl} id="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// Extra Credit 2
// function UsernameForm({onSubmitUsername}) {
//   const [errorMessage, setError] = React.useState(null)
//   const inputEl = React.useRef(null)

//   const handleSubmit = event => {
//     event.preventDefault()
//     const userName = inputEl.current.value
//     onSubmitUsername(userName)
//   }

//   const handleChange = event => {
//     const value = event.target.value
//     const isValid = value === value.toLowerCase()
//     setError(isValid ? null : 'Usename must be lower case')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           ref={inputEl}
//           id="username"
//           type="text"
//           onChange={handleChange}
//         />
//       </div>
//       <div role="alert" style={{color: 'red'}}>
//         {errorMessage}
//       </div>
//       <button type="submit" disabled={errorMessage}>
//         Submit
//       </button>
//     </form>
//   )
// }

// Extra Credit 3
function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  const handleChange = event => {
    setUserName(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={userName}
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
