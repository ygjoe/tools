import React from 'react';

import Link from 'umi/link';

class App extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div>
        <Link to='/userAgent'>User Agent</Link>
      </div>
    );
  }
}

export default App;
