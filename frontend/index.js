import * as React from 'react'
import * as ReactDOM from 'react-dom'

class ReactApp extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>ReactDOM</div>
    )
  }
}

ReactDOM.render(<ReactApp />, document.querySelector('#reactApp')); 