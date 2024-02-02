import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <Col>
                    <ul className='mainul d-flex '>
                <img src={require('../image/logo.png')} className='imagelogo'></img>
                    <li></li>
                        <li className='menus'><a href=''> <Link to="posts" className='dropmenu'>Posts</Link></a></li>
                        <li className='menus'><a href=''><Link to="/comments" className='dropmenu'>Comments</Link></a></li>
                        <li className='menus'><a href=''><Link to="/albums" className='dropmenu'>Albums</Link></a></li>
                        <li className='menus'><a href=''><Link to="/photos" className='dropmenu'>Photos</Link></a></li>
                        <li className='menus'><a href=''><Link to="/todos" className='dropmenu'>Todos</Link></a></li>
                        <li className='menus'><a href=''><Link to="/user" className='dropmenu'>Users</Link></a></li>
                    </ul>
                </Col>
            </header>
        </>
    )
}
export default Header;