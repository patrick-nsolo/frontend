import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
    //create variable to facilitate navigation link change
    const [menu,setMenu] = useState('shop');
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>MAYOR STORE</p>     
        </div>
        <ul className='nav-menu'>
            <li onClick{() => {setMenu()}}>Shop <hr/></li>
            <li onClick{() => {setMenu()}}>Men</li>
            <li onClick{() => {setMenu()}}>Women</li>
            <li onClick{() => {setMenu()}}>Kids</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt=''/>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar;
