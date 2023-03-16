import Nav from "react-bootstrap/Nav";

   const LogOut = () => {
   const removeToken = () => localStorage.removeItem('token')

   return (
    
        <Nav.Link href="/login" onClick={removeToken}>
         Logout 
        </Nav.Link>
       
   
   )
}

export default LogOut