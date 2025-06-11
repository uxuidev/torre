"use client"
import Link from "next/link"
import Image from "next/image"
import { useUser } from "@/data/context/userContext";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/app/login/auth";

const Header = () => {
    useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const { user, setUser } = useUser();

    const logout = async () => {
        try {
            const response = await fetch('/api/logout');

            if (response.ok) {
                setUser(null);
                //console.log(pathname);
                if (pathname == '/buy') {
                    router.push('/');
                }
            } else {
                // Logout failed, show error message
                console.error('Error logging out:', response.status);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="container-fluid" id="home">
            <div className="row header">
                <div className="col-12 col-md-3 text-center text-dark">
                    <div className="d-flex align-items-end justify-content-center">
                        <Image src='/imgs/logo150.png' className="header-logo" width={150} height={150} alt="Sportswear logo" priority />
                        <div className="company-name">ITWORK.TECH</div>
                    </div>
                    <div className="header-tagline">YOUR TECH PARTNER</div>
                </div>
                <div className="col-8 col-md-6">
                    <div className="row">
                        <div className="col-12 text-center top-bar">
                            <Link href="/#home">Home</Link>
                            <Link href="/#testimonial">Testimonial</Link>
                            <Link href="/#services">Services</Link>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-3 text-end cursor-pointer">
                    <div className="d-flex align-items-end flex-column">
                        {
                            user ?
                                <div className="btn-header btn-sign" onClick={() => logout()}>Sign Out</div> :
                                <div className="btn-header btn-sign" onClick={() => router.push('/login')}>Sign in</div>
                        }
                        <Link href={'/hire?subject=quote'} style={{ textDecoration: 'none' }}><div className="btn-header btn-quote">Get Quote</div></Link>
                    </div>
                </div>
            </div>
            <div className="row tab-stripe">
                <div className="col-12 col-md-6 col-lg-4 tab-container">
                    <div className="btn-tab"><Link href="/hire">Hire</Link></div>
                    <div className="btn-tab"><Link href="/faq">FAQ</Link></div>
                    <div className="btn-tab tab-last"><Link href="/contact">Contact</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Header