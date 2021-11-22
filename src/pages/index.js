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
          <Link to='/userAgent'>User Agent</Link>
        </li>
        <li>
          <Link to='/files'>配置文件</Link>
        </li>
      </ul>
    )
  }
}

export default App
