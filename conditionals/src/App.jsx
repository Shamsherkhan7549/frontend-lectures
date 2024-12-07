
import './App.css'
import Product from './components/Product'

function App() {
  const style = {
    
  }
  return (
    <>
      <div>
        <Product name={'laptop'} price={30000}/>
        <Product name={'mobile'} price={15000}/>
        <Product name={'hardisk'} price={10000}/>
      </div>
    </>
  )
}

export default App
