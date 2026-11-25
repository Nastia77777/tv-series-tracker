import {Link} from 'react-router-dom';

export const Navbar =()=> {
    return (
        <nav style={{padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem'}}>
            <Link to="/">Search</Link>
            <Link to="/my-shows">My Shows</Link>
            <Link to="/schedule">Schedule</Link>
        </nav>
    );
};