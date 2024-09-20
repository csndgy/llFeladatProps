
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import UserProfile from './UserProfile'
import ProdDetails from './ProductDetails'


const uzenet={
  name:"Welcome"
}

const userProf={
  name:"Kiss Albert",
  age:45,
}

const products={
  name:"Laptop",
  price:1200,
  inStock:true,
}



function App() {

  return (
    <>
    <WelcomeMessage {...uzenet}></WelcomeMessage>
    <UserProfile {...userProf}></UserProfile>
    <ProdDetails {...products}></ProdDetails>
    
    
      
    </>
  )
}

export default App
