import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { BrowserRouter, NavLink, Route, Routes, useNavigate, } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { FaBarsStaggered, FaUserShield } from "react-icons/fa6"
import { BiChevronRight, BiUser } from "react-icons/bi"
import { IoSearchOutline } from "react-icons/io5"
import { BsAwardFill, BsBuildingAdd, BsFillLayersFill, BsFillMoonFill } from "react-icons/bs"
import { AnimatePresence, motion } from 'framer-motion'
import SubMenu from './SubMenu.jsx'
import { MdExitToApp } from "react-icons/md"

import { AiFillDashboard, AiFillHome } from "react-icons/ai"
import Dashboard from './page/Dashboard';
import "./Sidebar.css"
import RolePage from './page/RolePage.jsx';
const store = configureStore({
  reducer: {
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
const routesArray = [
  {
    name: "Dashboard",
    permission: "dashboard",
    icon: <AiFillDashboard size={25} />,
    subRoutes: [
      {
        path: "/",
        name: "User Dashboard",
      }, {
        path: "/school",
        name: "Payment Dashboard",
      }, {
        path: "/university",
        name: "Location Dashboard",
      },
    ]
  },
  {
    path: "/role",
    name: "Role",
    permission: "roll",
    icon: <BsAwardFill size={25} />,
  },
  {
    path: "/Category",
    name: "Category",
    permission: "category",
    icon: <BsFillLayersFill size={25} />,
  }, {
    name: "Articles",
    permission: "exam",
    icon: <BsFillLayersFill size={25} />,
    subRoutes: [
      {
        path: "/exam",
        name: "Exam",
      }, {
        path: "/blog",
        name: "Blog",
      },
    ]
  }, {
    name: "All users",
    permission: "blog create",
    icon: <FaUserShield size={25} />,
    subRoutes: [{
      path: "/user",
      name: "All Users",
    }, {
      path: "/admin-user",
      name: "Admin Users",
    }, {
      path: "/apply-admin",
      name: "Request for Teacher",
    }]
  }, {
    name: "My Post",
    icon: <FaUserShield size={25} />,
    permission: "exam create",
    subRoutes: [{
      path: "/my-exam",
      name: "MY Exam",
    }, {
      path: "/my-blog",
      name: "MY Blogs",
    }, {
      path: "/my-collages",
      name: "MY Collages",
    }]
  },
]
function ClintRoutes({ children, title, rightComp }) {
  const showLinkAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    show: {
      width: 'auto',
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
  const [isOpen, setIsOpen] = useState(true)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { adminAuth } = useSelector((State) => State.admin)
  const [auth, setAuth] = useState(true)
  // const { roles } = useSelector((state) => state.role)
  // const { adminUser } = useSelector((state) => state.admin)
  // useEffect(() => {
  //     dispatch(GetRole())
  // }, [])
  return (<>
    {
      auth ? (<>
        <div className='wrapper' >
          <div className={isOpen ? "sideBar active" : "sideBar"} >
            <div className="logo">
              {isOpen && <h1>LOGO</h1>}
              <div onClick={() => setIsOpen(!isOpen)}>
                <FaBarsStaggered size={30} />
              </div>
            </div>
            <section className='routes'>
              {routesArray.map((rotes, i) => (
                <React.Fragment key={i}>
                  {
                    rotes.subRoutes ?
                      <SubMenu showLinkAnimation={showLinkAnimation} isOpen={isOpen} rotes={rotes} setIsOpen={setIsOpen} />
                      : (<>
                        {/* {
                          (RouteAllowed(roles, adminUser, rotes.permission) || adminUser.admin)
                          && */}
                        <div className="rotes" onClick={() => navigate(rotes.path)}>
                          <div className="icon" >{rotes.icon} </div>
                          <AnimatePresence>
                            {isOpen && <motion.div variants={showLinkAnimation} initial="hidden" animate="show" exit="hidden" className='rotesText'>{rotes.name} </motion.div>}
                          </AnimatePresence>
                        </div>
                        {/* } */}

                      </>)
                  }
                </React.Fragment>
              ))}
            </section>
          </div>
          <div className='page' >
            <div className='pageTop' >
              <div className='pageTopSearch' >
                <IoSearchOutline size={30} style={{ color: "var(--dark-active)" }} />
                <input type="text" name="" id="" placeholder='Search.......' />
              </div>
              <div className='pageTopRight'>
                <img width="40" height="40" src="https://img.icons8.com/color/48/india-circular.png" alt="india-circular" />
                <BsFillMoonFill size={30} style={{ color: "var(--dark-active)", cursor: "pointer" }} />
                <button type='reset' >Logout</button>
              </div>
            </div>
            {children}
          </div>
        </div>
      </>) : (<>
        <div className='wrapper login'>
          <div className='loginForm' >
            <div className='loginTop'>Admin Panel</div>
            <div className='authLogin' >
              <label htmlFor='name'> Name</label>
              <input type="text" placeholder='Name' id='name' name="name" value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor='pass'> Password</label>
              <input type="text" placeholder='Password' id='pass' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div onClick={(e) => {
              e.preventDefault()
              alert("conect to backend")
              setAuth(true)
              // dispatch(adminLogin({ name, password })).then((e) => setAuth(e.payload.success)).catch((e) => alert(e.payload.message))
            }} className='authButton btn' >
              Submit
            </div>
          </div>
        </div>
      </>)
    }



  </>
  )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<ClintRoutes >
            <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route exact path='/role' element={<RolePage />} />
            </Routes>
          </ClintRoutes>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
