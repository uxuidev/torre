import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaLongArrowAltUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="container-fluid text-center footer mt-5">
            <div className="row">
                <div className="col-12">
                    <Link href={'/#'} style={{textDecoration:'none'}}>
                        <div className="footer-tagline">TORRE TEST</div>
                    </Link>
                </div>
                <div className="col-6 pb-3">
                    <div className="footer-headings">Quick Links</div>
                    <div><Link href="/">Admin</Link></div>
                    <div><Link href="/#faq">Add User</Link></div>
                    <div><Link href="/#contact">Search User</Link></div>
                    <div style={{ border: 'none' }}><Link href="#home" className="col3" title="Go to top"><FaLongArrowAltUp /></Link></div>
                </div>
                <div className="col-6 pb-3">
                    <div className="footer-headings"><span className="col1">Follow Me</span></div>
                    <div><Link href="https://www.facebook.com/adeel.rauf.793204/"><FaFacebookSquare className="ico-fb" /></Link></div>
                    <div><Link href="https://www.facebook.com/islahomazah/"><FaInstagramSquare className="ico-insta" /></Link></div>
                    <div className="border-0"><Link href="https://linkedin.com/in/adeelrauf"><FaLinkedin className="ico-li" /></Link></div>
                </div>
                <div className="col-12 footer-bottom">
                    &copy; 2025 Adeel Rauf | Designed by <Link href="https://adeelrauf.com" >Adeel Rauf</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer