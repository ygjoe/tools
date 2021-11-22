import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
        <p>
          .gitignore
        </p>
        <p>
          .idea <br />
          .vscode <br />
          .project <br />
          .git <br />
          .DS_Store <br />
        </p>
        <p>
          .umi <br />
          .umi-production <br />
        </p>
        <p>
          node_modules <br />
          dist <br />
        </p>
        <p>
          npm-debug.log* <br />
          yarn-debug.log* <br />
          yarn-error.log* <br />
          yarn.lock <br />
          package-lock.json <br />
        </p>
      </div>
    )
  }
}

export default App
