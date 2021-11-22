import React from 'react'
import Link from 'umi/link'

class App extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <ul>
        <li>
          <Link to='/files/gitignore'>gitignore</Link>
        </li>
        <li>
          <Link to='/files/npmrc'>npmrc</Link>
        </li>
      </ul>
    )
  }
}

export default App
