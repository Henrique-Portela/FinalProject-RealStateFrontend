import { createContext } from "react";


const AuthContext = createContext({
    token:"", user:{}
})


export default AuthContext