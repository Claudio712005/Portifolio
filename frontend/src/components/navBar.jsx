import '../assets/styles/navBar.sass'

function Navbar({ onChangePage }) {

    return (
        <nav id='nav_bar'>
            <div className="cursor"></div>
            <h1 id='name'>CLÁUDIO ARAÚJO</h1>
            <ul>
                <li onClick={() => onChangePage('home')}>HOME</li>
                <li onClick={() => onChangePage('sobre')}>SOBRE</li>
                <li>PROJETOS</li>
                <li>CURRÍCULO</li>
            </ul>
            <div className='icons-midia'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
            </div>
        </nav>
    )
}


export default Navbar;
