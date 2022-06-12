import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Header = () => {

  // Get user infos.
  const user = JSON.parse(localStorage.getItem('user-info'))
  const history = useNavigate();

  // Logout Function
  function logout() {
    localStorage.clear();
    history("/register");
  }

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 nav-bar-wrapper mb-lg-0">

                {/* if user logged in  */}

                {localStorage.getItem('user-info') ?
                  <>
                    <Link to="/add">Add Product</Link>
                    <Link to="/update">Update Product</Link>
                  </>
                  :
                  <>
                    <Link to="/home">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>
                }

              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>

              {localStorage.getItem('user-info') ?
                (<>
                  <div className="dropdown ml-5">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      {user && user.name}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                      <li><a onClick={logout} lassName="dropdown-item" href="#">Logout</a></li>
                    </ul>
                  </div>
                </>) : (<>
                  
                </>)
              }

            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Header