import { Component } from 'react'
import views from './views'

class App extends Component {
  render () {

    return (
      <div className="app">
        <h1>Kombucha Taproom</h1>

        {views.map((View, i) => (
          <View key={i} />
        ))}
      </div>
    )
  }
}

export default App
