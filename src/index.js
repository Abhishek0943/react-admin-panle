import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { FaBarsStaggered } from "react-icons/fa6"
import { BiChevronRight, BiUser } from "react-icons/bi"
import { IoSearchOutline } from "react-icons/io5"
import { BsFillMoonFill } from "react-icons/bs"

import { AiFillHome } from "react-icons/ai"
import Dashboard from './page/Dashboard';
const store = configureStore({
  reducer: {
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
const routesArray = [
  {
    name: "Dashboard",
    path: "/",
    icon: <AiFillHome size={25} color={"var(--dark-active"} />,
  }, {
    name: "Users",
    path: "/",
    icon: <BiUser size={25} color={"var(--dark-active"} />,
    subRoutes: [
      {
        name: "Astrologers",
        path: "/"
      },
      {
        name: "User",
        path: "/user"
      }
    ]
  },
]
const SubRoutes = ({ subRoutes }) => {
  return (
    <>
      {
        subRoutes.map((e, i) => (
          <div key={i} style={{ paddingLeft: "20px", display: "flex", alignItems: "center", gap: "10px", color:"var(--dark-inactive)", cursor:"pointer" }}>
            <div style={{ height: "10px", width: "10px", borderRadius: "50%", border: "2px solid var(--dark-inactive)" }}></div> {e.name}
          </div>
        ))
      }
    </>
  )
}
const ClintRoutes = ({ children }) => {



  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <div className='wrapper'>
        <div className={isOpen ? "activeSideBar sideBar" : "sideBar"}>
          <div className='sideBarTop' >
            <div className='sideBarTopLeft'>
              <div className='sideBarLogoIcon' >
              </div>
              <h1 className='sideBarName'>LOGo</h1>
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
              <FaBarsStaggered size={30} color={"var(--dark-text)"} />
            </div>
          </div>
          <div className='routesBox'>
            {
              routesArray.map((route, i) => (
                <React.Fragment key={i}>
                  {
                    route.subRoutes ?
                      <>
                        <div className='routes' >
                          <p>{route.icon}{route.name} </p>
                          <BiChevronRight size={25} style={{ backgroundColor: "var(--white)", borderRadius: "50%" }} color={"var(--dark-active"} />
                        </div>
                        <SubRoutes subRoutes={route.subRoutes} />
                      </>
                      : <>
                        <div className='routes' >
                          <p><AiFillHome size={25} color={"var(--dark-active"} />{route.name} </p>
                          {/* <BiChevronRight size={25} style={{ backgroundColor: "var(--white)", borderRadius: "50%" }} color={"var(--dark-active"} /> */}
                        </div>
                      </>
                  }
                </React.Fragment>

              ))
            }


          </div>
          {
            !isOpen && <div style={{ height: "100px", width: "20px", background: "black", position: "absolute", right: "-20px", top: "0", bottom: "0", margin: "auto" }} onClick={() => setIsOpen(!isOpen)}>

            </div>
          }

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
            </Routes>
          </ClintRoutes>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
