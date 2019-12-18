import React from 'react';
import css from './index.less';

class App extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div className={css.main}>
        {navigator.userAgent}
      </div>
    );
  }
}

export default App;
