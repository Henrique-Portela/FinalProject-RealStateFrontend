import { useState } from "react";
import AuthContext from "./AuthContext";


 const defaultToken = ""

 const AuthProvider =({
    children

 }) =>{
    const [token, setToken] = useState(defaultToken)
    return (
       <AuthContext.Provider  value={{token, setToken}}> 
       {children}
       </AuthContext.Provider>
    )
 }

  export default AuthProvider




