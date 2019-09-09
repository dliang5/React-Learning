import React from 'react'
// import { NavLink } from 'react-router-dom'

// const activeStyle = {
//     color: 'rgb(187, 46, 31) '
// }

export default function Nav () {
    return (
        <nav className='row space-between'>
            <ul className='row nav'>
                <li className='nav-link'>
                    {/* <NavLink
                        to='/'
                        exact
                        activeStyle={activeStyle}
                        className='nav-link'
                    >
                        Top
                    </NavLink> */}
                    Top
                </li>
                <li className='nav-link'>
                    {/* <NavLink
                        // to='/new'
                        to='/'
                        exact
                        activeStyle={activeStyle}
                        className='nav-link'
                    >
                        New
                    </NavLink> */}
                    New
                </li>
            </ul>
        </nav>
    );
}