
function Footer() {
    return (<>
    <footer >
      <div className="container d-flex justify-content-around">
        <a className="navbar-brand" href="#">LOGO HERE</a>
        <div >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">© 2021 </a>
            </li>  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Terms and conditions</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Privacy Policy</a>
            </li>  
          </ul>
        </div>
          <button type="button" class="btn btn-secondary">icons</button>
      </div>
    </footer>
    </>);
  }
  
  export default Footer;