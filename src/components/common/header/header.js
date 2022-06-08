import Logo from '../../../assets/images/screenshot.png'

function Header() {
    return (<>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#"><img className='header_img_logo' src={ Logo }/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    						<span className="navbar-toggler-icon"></span>
    					</button>

        <div id="navbarSupportedContent" className="custom-nav-expand collapse navbar-collapse">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Link</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Link</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Link</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Link</a>
            </li>
          </ul>
          <button type="button" className="btn btn-secondary">Button</button>
        </div>
      </div>
    </nav>
  </>);
}

export default Header;