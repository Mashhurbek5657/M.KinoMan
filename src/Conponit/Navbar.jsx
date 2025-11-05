import React from 'react'
import Logo from '../Conponit/Logo.png'
import Qiud from '../Conponit/Vector (1).png'
import Xa from '../Conponit/Vector (2).png'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className="contenr">
                <div className="parent">
                    <div className='nav'>
                        <img src={Logo} alt="" />
                        <div className="nav-pg">
                        <ul>
                            <li><NavLink className='px-4 py-3 rounded-[8px]' to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink className='px-4 py-3 rounded-[8px]' to="/video" activeClassName='active'>Movies & Shows</NavLink> </li>
                            <li><NavLink className='px-4 py-3 rounded-[8px]' to="/support" activeClassName='active'>Support</NavLink></li>
                            <li><NavLink className='px-4 py-3 rounded-[8px]' to="/Subscriptions" activeClassName='active'>Subscriptions</NavLink></li>
                        </ul>
                        </div>
                        <div className=' flex gap-[30px]'>
                            <img src={Qiud} alt="" className=' cursor-pointer' />
                            <img src={Xa} alt="" className=' cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <main className='pt-8'>
                <Outlet/>
            </main>
        </div>
    )
}
