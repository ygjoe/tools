import React from 'react'
import css from './index.less'

class App extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div className={css.main}>
        <p>navigator.userAgent = {navigator.userAgent}</p>
        <p>window.__wxjs_environment = {window.__wxjs_environment}</p>
      </div>
    )
  }
}

export default App
