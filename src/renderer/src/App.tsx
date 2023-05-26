import './assets/index.css'
import { Grommet } from 'grommet'

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
}

const App = (): JSX.Element => {
  return (
    <Grommet theme={theme} full>
      <div>Hello Nostr</div>
    </Grommet>
  )
}

export default App
