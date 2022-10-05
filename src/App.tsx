import { Layout } from './components/layout/layout'
import { ProviderContext } from './components/context/context'
import './App.css'

function App() {

  return (
    <ProviderContext>
      <div className="App">
        <Layout/>
      </div>
    </ProviderContext>
  )
}

export default App
