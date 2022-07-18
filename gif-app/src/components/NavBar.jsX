//import "../css/large.css";
//import "../css/small.css";

export default function Navbar(){
    return <nav className="navigation">
        <a href="https://github.com/Nemo3003" className="site-title" test-id="navbar-test">Ulises' Github</a>
        <ul>
            <li><a href="#">Home</a></li>
            <li> <a href='#'>&nbsp;Practice</a></li>
            <li> <a href='#'>&nbsp;First Project</a></li>
            <li><a href='#'>&nbsp;Second Project</a></li>
            <li><a href='#'>&nbsp;Third Project</a></li>
        </ul>
    </nav>
}