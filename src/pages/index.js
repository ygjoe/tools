import React from 'react';

import Link from 'umi/link';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/userAgent">User Agent</Link>
        </li>
      </ul>
    );
  }
}

export default App;
