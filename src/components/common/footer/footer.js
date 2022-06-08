import Logo from '../../../assets/images/screenshot.png'
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";

function Footer() {
    return (<>
    <footer >
      <div className="container d-flex justify-content-between">
        <a className="footer-brand" href="#">
          <img className='footer_img_logo' src={ Logo }/>
          </a>
        <div >
          <ul className="footer-list m-auto mb-2 mb-lg-0" >
            <li className="list-item">
              <a className="footer-link active" aria-current="page" href="#">© 2021 </a>
            </li>  
            <li className="list-item">
              <a className="footer-link active" aria-current="page" href="#">Terms and conditions</a>
            </li>  
            <li className="list-item">
              <a className="footer-link active" aria-current="page" href="#">Privacy Policy</a>
            </li>  
          </ul>
        </div>
        <div className='footer_icons'>
          <BsTwitter className='footer_icon'/>
          <BsInstagram className='footer_icon' />
          <FaGamepad className='footer_icon' />
        </div>
      </div>
    </footer>
    </>);
  }
  
  export default Footer;