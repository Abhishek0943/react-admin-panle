import React, { useEffect, useState } from 'react'
import "../css/rolePage.css"
import { LuSearch } from "react-icons/lu"
import { BiBookmarkAlt } from 'react-icons/bi';
import { BsArrowLeftShort } from 'react-icons/bs';
function RolePage() {
    const [page, setPage] = useState("create")
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === "a") {
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <>
            <div className='role' style={{ flex: "1", display: "flex" }}>
                <div className='roleContainer' style={{}}>
                    {
                        page === "create" ? <>
                            <div className='roleTop'>
                                <BsArrowLeftShort size={40} style={{ cursor: "pointer" }} onClick={()=>setPage("s")}/>
                                <div className='roleTopLeft'>Role Create</div>
                            </div>
                            <div className='roleTableContainer'>
                                <div className='roleNav create'>
                                    <div className='roleSearch'><BiBookmarkAlt size={30} /><input type="text" /></div>
                                    <div className='btn roleCreateBtn'>Create</div>
                                </div>

                            </div>

                        </> : <>
                            <div className='roleTop'>
                                <div className='roleTopLeft'>Role Management</div>
                            </div>
                            <div className='roleTableContainer'>
                                <div className='roleNav'>
                                    <div className='roleSearch'><LuSearch size={30} /><input type="text" /></div>
                                    <div className='btn roleCreateBtn' onClick={()=>setPage("create")}>Create Role</div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Select</td>
                                            <td>Role</td>
                                            <td>Permission</td>
                                            <td>Created by</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" name="" id="" /></td>
                                            <td>Dashboard</td>
                                            <td>Dachboard view </td>
                                            <td>Nitin</td>
                                            <td><img width="40" height="40" src="https://img.icons8.com/plasticine/40/filled-trash.png" alt="filled-trash" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default RolePage
