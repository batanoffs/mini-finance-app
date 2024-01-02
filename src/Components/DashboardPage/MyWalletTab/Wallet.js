import { Link } from "react-router-dom"
import person3 from "../../../images/profile/senior-man-white-sweater-eyeglasses.jpg"
import person2 from "../../../images/profile/young-beautiful-woman-pink-warm-sweater.jpg"
import person1 from "../../../images/profile/young-woman-with-round-glasses-yellow-sweater.jpg"

export const MyWalletTab = () => {
    return (
        <> 
        <div className="title-group mb-3">
                        <h1 className="h2 mb-0">Wallet</h1>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-12 col-12">
                            <div className="custom-block bg-white">
                                <h5 className="mb-4">Account Activities</h5>

                                <div className="table-responsive">
                                    <table className="account-table table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Date</th>

                                                <th scope="col">Time</th>

                                                <th scope="col">Description</th>

                                                <th scope="col">Payment Type</th>

                                                <th scope="col">Amount</th>

                                                <th scope="col">Balance</th>

                                                <th scope="col">Status</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <th scope="row">July 5, 2023</th>

                                                <th scope="row">10:00 PM</th>

                                                <th scope="row">Shopping</th>

                                                <th scope="row">C2C Transfer</th>

                                                <th className="text-danger" scope="row">
                                                    <span className="me-1">-</span>
                                                    $100.00
                                                </th>

                                                <th scope="row">$5,500.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-danger">
                                                        Pending
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">July 2, 2023</th>

                                                <th scope="row">10:42 AM</th>

                                                <th scope="row">Food Delivery</th>

                                                <th scope="row">Mobile Reload</th>

                                                <th className="text-success" scope="row">
                                                    <span className="me-1">+</span>
                                                    $250
                                                </th>

                                                <th scope="row">$5,600.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-success">
                                                        Success
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">June 28, 2023</th>

                                                <th scope="row">8:20 PM</th>

                                                <th scope="row">Billing</th>

                                                <th scope="row">Goverment</th>

                                                <th className="text-success" scope="row">
                                                <span className="me-2">+</span>$50</th>

                                                <th scope="row">$5,350.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-success">
                                                        Success
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">June 24, 2023</th>

                                                <th scope="row">10:48 PM</th>

                                                <th scope="row">Shopee</th>

                                                <th scope="row">QR Code</th>

                                                <th className="text-danger" scope="row">
                                                <span className="me-2">-</span>$380</th>

                                                <th scope="row">$5,300.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-dark">
                                                        Cancelled
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">June 12, 2023</th>

                                                <th scope="row">12:30 AM</th>

                                                <th scope="row">Food Delivery</th>

                                                <th scope="row">Mobile Reload</th>

                                                <th className="text-success" scope="row">
                                                <span className="me-2">+</span>$250</th>

                                                <th scope="row">$4,920.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-success">
                                                        Success
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">May 31, 2023</th>

                                                <th scope="row">2:40 PM</th>

                                                <th scope="row">Food Delivery</th>

                                                <th scope="row">Mobile Reload</th>

                                                <th className="text-success" scope="row">
                                                <span className="me-2">+</span>$50</th>

                                                <th scope="row">$4,920.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-success">
                                                        Success
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">May 22, 2023</th>

                                                <th scope="row">8:50 AM</th>

                                                <th scope="row">Food Delivery</th>

                                                <th scope="row">Mobile Reload</th>

                                                <th className="text-success" scope="row">
                                                <span className="me-2">+</span>$50</th>

                                                <th scope="row">$4,920.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-success">
                                                        Success
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">May 20, 2023</th>

                                                <th scope="row">6:45 PM</th>

                                                <th scope="row">Food Delivery</th>

                                                <th scope="row">Mobile Reload</th>

                                                <th className="text-danger" scope="row">
                                                <span className="me-2">-</span>$500</th>

                                                <th scope="row">$4,920.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-danger">
                                                        Pending
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">April 28, 2023</th>

                                                <th scope="row">11:20 AM</th>

                                                <th scope="row">Food Delivery</th>

                                                <th scope="row">Mobile Reload</th>

                                                <th className="text-success" scope="row">
                                                <span className="me-2">+</span>$856</th>

                                                <th scope="row">$4,920.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-success">
                                                        Success
                                                    </span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th scope="row">April 16, 2023</th>

                                                <th scope="row">11:00 PM</th>

                                                <th scope="row">Food Delivery</th>

                                                <th scope="row">Mobile Reload</th>

                                                <th className="text-success" scope="row">
                                                <span className="me-2">+</span>$50</th>

                                                <th scope="row">$4,920.00</th>

                                                <th scope="row">
                                                    <span className="badge text-bg-danger">
                                                        Pending
                                                    </span>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center mb-0">
                                            <li className="page-item">
                                                <Link className="page-link"  to={"#"} aria-label="Previous">
                                                    <span aria-hidden="true">Prev</span>
                                                </Link>
                                            </li>

                                            <li className="page-item active" aria-current="page">
                                                <Link className="page-link" to={"#"}>1</Link>
                                            </li>
                                            
                                            <li className="page-item">
                                                <Link className="page-link"  to={"#"}>2</Link>
                                            </li>
                                            
                                            <li className="page-item">
                                                <Link className="page-link"  to={"#"}>3</Link>
                                            </li>

                                            <li className="page-item">
                                                <Link className="page-link"  to={"#"}>4</Link>
                                            </li>
                                            
                                            <li className="page-item">
                                                <Link className="page-link"  to={"#"} aria-label="Next">
                                                    <span aria-hidden="true">Next</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                            </div>
                        </div>

                        <div className="col-lg-7 col-12">
                            <div className="custom-block custom-block-balance">
                                <small>Your Balance</small>

                                <h2 className="mt-2 mb-3">$254,800</h2>

                                <div className="custom-block-numbers d-flex align-items-center">
                                    <span>****</span>
                                    <span>****</span>
                                    <span>****</span>
                                    <p>2560</p>
                                </div>

                                <div className="d-flex">
                                    <div>
                                        <small>Valid Date</small>
                                        <p>12/2028</p>
                                    </div>

                                    <div className="ms-auto">
                                        <small>Card Holder</small>
                                        <p>Thomas</p>
                                    </div>
                                </div>
                            </div>

                            <div className="custom-block custom-block-bottom d-flex flex-wrap">
                                <div className="custom-block-bottom-item">
                                    <Link to={"#"} className="d-flex flex-column">
                                        <i className="custom-block-icon bi-wallet"></i>

                                        <small>Top up</small>
                                    </Link>
                                </div>

                                <div className="custom-block-bottom-item">
                                    <Link to={"#"} className="d-flex flex-column">
                                        <i className="custom-block-icon bi-upc-scan"></i>

                                        <small>Scan & Pay</small>
                                    </Link>
                                </div>

                                <div className="custom-block-bottom-item">
                                    <Link to={"#"} className="d-flex flex-column">
                                        <i className="custom-block-icon bi-send"></i>

                                        <small>Send</small>
                                    </Link>
                                </div>

                                <div className="custom-block-bottom-item">
                                    <Link to={"#"} className="d-flex flex-column">
                                        <i className="custom-block-icon bi-arrow-down"></i>

                                        <small>Request</small>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12">
                            <div className="custom-block custom-block-transations">
                                <h5 className="mb-4">Recent Transations</h5>

                                <div className="d-flex flex-wrap align-items-center mb-4">
                                    <div className="d-flex align-items-center">
                                        <img src={person3} className="profile-image img-fluid" alt="person"/>

                                        <div>
                                            <p>
                                                <Link to={"#"}>Daniel Jones</Link>
                                            </p>

                                            <small className="text-muted">C2C Transfer</small>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>05/12/2023</small>
                                        <strong className="d-block text-danger"><span className="me-1">-</span> $250</strong>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap align-items-center mb-4">
                                    <div className="d-flex align-items-center">
                                        <img src={person2} className="profile-image img-fluid" alt="person"/>

                                        <div>
                                            <p>
                                                <Link to={"#"}>Public Bank</Link>
                                            </p>

                                            <small className="text-muted">Mobile Reload</small>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>22/8/2023</small>
                                        <strong className="d-block text-success"><span className="me-1">+</span> $280</strong>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={person1} className="profile-image img-fluid" alt="person"/>

                                        <div>
                                            <p><Link to={"#"}>Store</Link></p>

                                            <small className="text-muted">Payment Received</small>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>22/8/2023</small>
                                        <strong className="d-block text-success"><span className="me-1">+</span> $280</strong>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
        </>
    )
}