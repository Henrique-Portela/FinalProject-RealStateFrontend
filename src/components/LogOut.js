
const LogOut = () => {
   const removeToken = localStorage.removeItem('token')

   return (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login/Logout
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Login</a></li>
            <li><a className="dropdown-item" onClick={() => removeToken} href="#">Logout</a></li>
            
        </ul>
    </div>
   )
}

export default LogOut