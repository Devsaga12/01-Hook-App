import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const {user, setUser}=useContext(UserContext);


  return (
    <>
        <h2>welcome User</h2>
        <hr />

        <pre>
          {JSON.stringify(user,null,3)}
        </pre>

        <button 
        className="btn btn-primary"
        onClick={()=>setUser({id:123, name:'carlos', email:'@icloud.com'  })}
        >
          Establecer Usuario
        </button>
    </>
  )
}
