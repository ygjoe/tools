import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
        <p>
          .npmrc
        </p>
        <p>
          phantomjs_cdnurl=http://cnpmjs.org/downloads <br />
          sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ <br />
          registry=https://registry.npm.taobao.org <br />
        </p>
      </div>
    )
  }
}

export default App
