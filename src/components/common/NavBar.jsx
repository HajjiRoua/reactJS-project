
import { Menu } from 'semantic-ui-react';
import logo from '../../constants/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top" style={{ background: '#ffdedb' }}>
            <Menu.Item>
                <img src={logo} alt="logo" style={{ width: 75 ,height: 75 }} />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/"  style={{ fontSize: '1.2rem', fontWeight: 'bold' }}/> 
           <Menu.Item name="Recipes" as={Link} to="/recipes"  style={{ fontSize: '1.2rem', fontWeight: 'bold' }} /> 
           <Menu.Item name="Profile" as={Link} to="/profile"  style={{ fontSize: '1.2rem', fontWeight: 'bold' }} /> 
        </Menu>
    )
}

export default NavBar;