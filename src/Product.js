import { useEffect, useState } from "react"

export default function Product () {

    let [name, setName] = useState("Joy")
    let [age, setAge] = useState(22)

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


      return function(){
        console.log("Component has been unmounted")
      }

    }, [age])



    return (

        <div className="product">

            <h3>Samsung Galaxy Duo</h3>

            <h2>{name}</h2>
            <button onClick={()=>{
                setName("Karabiner")
            }}>Change Name</button>

            <h2>{age}</h2>
            <button onClick={()=>{
                setAge(23)
            }}>Change Age</button>

        </div>

    )

}