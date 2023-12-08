import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [users, setUsers] = useState([])

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{

      console.log(data);

      setUsers(data);

    })
    .catch((err)=>{
      console.log(err);
    })

  }, [])




  return (

    

    <div className="App">

      {

        users.map((user)=>{
          return (
            <div className='user' key={user.id}>

              <h1>{user.name}</h1>
              <p>{user.website}</p>

            </div>
          )
        })

      }

      
      
      
      
      
      
      
      {/*  

        let[productVisible, setProductVisible] = useState(false)

        <button onClick={()=>{

        if(productVisible==true){
          setProductVisible(false)
        }
        if(productVisible==false){
          setProductVisible(true)
        }

      }}>Toggle Product</button>
      

        {
          productVisible == true  ? (<Product/>) : null

        } */}

      

    </div>
  );
}

export default App;
