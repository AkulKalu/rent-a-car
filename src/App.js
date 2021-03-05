import './Style.css';
import Layout from './Components/Layout/Layout';
import {StateProvider} from './HOC/StateProvider'

function App() {
  return <StateProvider> <Layout /> </StateProvider> 
}

export default App;
