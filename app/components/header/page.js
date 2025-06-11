"use client"
import Link from "next/link"

const Header = () => {

    return (
        <div className="container-fluid" id="home">
            <div className="row header">
                <div className="col-12 col-md-3 text-center text-dark">
                    <div className="d-flex align-items-end justify-content-center">
                        <div className="company-name">TORRE TEST</div>
                    </div>
                    <div className="header-tagline">DATA VISUALIZATION</div>
                </div>
                <div className="col-8 col-md-6">
                    <div className="row">
                        <div className="col-12 text-center top-bar">
                            <Link href="/#">Admin</Link>
                            <Link href="/#user">Add User</Link>
                            <Link href="/#serch">Search User</Link>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-3 text-end cursor-pointer">
                    <div className="d-flex align-items-end flex-column">
                        
                    </div>
                </div>
            </div>
            <div className="row tab-stripe">
                <div className="col-12 col-md-6 col-lg-4 tab-container">
                    <div className="btn-tab"><Link href="/#hire">Users</Link></div>
                    <div className="btn-tab"><Link href="/#faq">FAQ</Link></div>
                    <div className="btn-tab tab-last"><Link href="/#contact">Contact</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Header