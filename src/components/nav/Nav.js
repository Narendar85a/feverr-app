import React, { useEffect, useState } from "react";
import { Link , useLocation} from "react-router-dom";
import './Nav.css'

const Nav = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);


const currentUser = {
  id: 1,
  username: 'Nare',
  isSeller: true,
}

return (
  <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
  <div className="nav-bar">
      <div className="logo">
        <Link className="text" to='/'>fiverr</Link>
        <span className="dot">.</span>
        </div>

      <div className="links">
        <span>fiverr business</span>
        <span>Explore</span>
        <span>English</span>
        {!currentUser?.isSeller && <span>Become a Seller</span>}
        {currentUser ? (
          <div className="user" onClick={()=>setOpen(!open)}>
            <img
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqekwL2LW2-NBO_FE2f2IjZQnp_1xl-shGcg&usqp=CAU"
              alt=""
            />
            <span>{currentUser?.username}</span>
            {open && <div className="options">
              {currentUser.isSeller && (
                <>
                  <Link className="link" to="/mygigs">
                    Gigs
                  </Link>
                  <Link className="link" to="/add">
                    Add New Gig
                  </Link>
                </>
              )}
              <Link className="link" to="/orders">
                Orders
              </Link>
              <Link className="link" to="/messages">
                Messages
              </Link>
              <Link className="link" to="/">
                Logout
              </Link>
            </div>}
          </div>
        ) : (
          <>
            <span>Sign in</span> 
            <Link className="link" to="/register">
              <button>Join</button>
            </Link>
          </>
        )}
      </div>
    </div>
    { (active || pathname !== "/") && (
      <>
      <hr/>
        <div className="link-menu">
        <Link className="linkMenu" to='/'>Graphics & Design</Link>
        <Link className="linkMenu" to='/'>Video & Animation</Link>
        <Link className="linkMenu" to='/'>Writing & Translation</Link>
        <Link className="linkMenu" to='/'>AI Services</Link>
        <Link className="linkMenu" to='/'>Digital Marketing</Link>
        <Link className="linkMenu" to='/'>Music & Audio</Link>
        <Link className="linkMenu" to='/'>Programming & Tech</Link>
        <Link className="linkMenu" to='/'>Business</Link>
        <Link className="linkMenu" to='/'>Lifestyle</Link>
      </div>
      <hr/>
     </>
    )}

  </div>

  )
}

export default Nav