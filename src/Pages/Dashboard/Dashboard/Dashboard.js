import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../Myorders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="dashboard">
            <body className="home">
                <div className="container-fluid display-table">
                    <div className="row display-table-row">
                        <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">

                            <div className="navi">
                                <ul>
                                    {/* <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                                    <li><a href="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Workflow</span></a></li>
                                    <li><a href="#"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Statistics</span></a></li>
                                    <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Calender</span></a></li>
                                    <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Users</span></a></li>
                                    <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></a></li>
                                    {/*  */}

                                    <li><Link to={`${url}`}><i className="fa fa-pie-chart"></i> <span className="nav-label">DASHBOARD</span> </Link></li>
                                    <li> <Link to={`${url}/payment`}><i className="fa fa-tasks" aria-hidden="true"></i> <span className="nav-label text-white">Payment</span></Link></li>
                                    <li> <Link to={`${url}/myOrders`}><i className="fa fa-bar-chart" aria-hidden="true"></i> <span className="nav-label text-white">My Orders</span></Link></li>
                                    <li> <Link to={`${url}/review`}><i className="fa fa-user" aria-hidden="true"></i> <span className="nav-label text-white">Review</span></Link></li>
                                    <li> <Link to={`${url}/manageAllOrders`}><i className="fa fa-calendar" aria-hidden="true"></i> <span className="nav-label text-white">Manage all orders</span></Link></li>
                                    <li> <Link to={`${url}/addProduct`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Add  a Product</span></Link></li>
                                    <li> <Link to={`${url}/makeAdmin`}><i className="fa fa-cog" aria-hidden="true"></i>  <span className="nav-label text-white">Make Admin</span></Link></li>
                                    <li> <Link to={`${url}/manageProducts`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Manage Products</span></Link></li>




                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-11 display-table-cell v-align">
                            <div className="user-dashboard">

                                <div className="row">
                                    {/* <div className="col-md-5 col-sm-5 col-xs-12 gutter">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia dolor aliquid repellendus atque veniam temporibus natus hic, quibusdam a aut, nesciunt sequi quo. Magni molestiae pariatur sequi velit voluptas!</p>

                                    </div>
                                    <div className="col-md-7 col-sm-7 col-xs-12 gutter">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia dolor aliquid repellendus atque veniam temporibus natus hic, quibusdam a aut, nesciunt sequi quo. Magni molestiae pariatur sequi velit voluptas!</p>



                                    </div> */}

                                    <Switch>
                                        <Route exact path={path}>
                                            <MyOrders></MyOrders>
                                        </Route>

                                        <Route path={`${path}/payment`}>
                                            <Payment></Payment>
                                        </Route>
                                        <Route path={`${path}/myOrders`}>
                                            <MyOrders></MyOrders>
                                        </Route>
                                        <Route path={`${path}/review`}>
                                            <Review></Review>
                                        </Route>

                                        <Route path={`${path}/manageAllOrders`}>
                                            <ManageAllOrders></ManageAllOrders>
                                        </Route>
                                        <Route path={`${path}/addProduct`}>
                                            <AddProduct></AddProduct>
                                        </Route>
                                        <Route path={`${path}/makeAdmin`}>
                                            <MakeAdmin></MakeAdmin>
                                        </Route>
                                        <Route path={`${path}/manageProducts`}>
                                            <ManageProducts></ManageProducts>
                                        </Route>


                                    </Switch>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </body>






            {/*
            
       <li><Link to={`${url}`}><i className="fa fa-pie-chart"></i> <span className="nav-label">DASHBOARD</span> </Link></li>
                                    <li> <Link to={`${url}/payment`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Payment</span></Link></li>
                                    <li> <Link to={`${url}/myOrders`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">My Orders</span></Link></li>
                                    <li> <Link to={`${url}/review`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Review</span></Link></li>
                                    <li> <Link to={`${url}/manageAllOrders`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Manage all orders</span></Link></li>
                                    <li> <Link to={`${url}/addProduct`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Add  a Product</span></Link></li>
                                    <li> <Link to={`${url}/makeAdmin`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Make Admin</span></Link></li>
                                    <li> <Link to={`${url}/manageProducts`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Manage Products</span></Link></li>         
            
          
            
            <Switch>
<Route exact path={path}>
    <MyOrders></MyOrders>
</Route>

<Route path={`${path}/payment`}>
    <Payment></Payment>
</Route>

<Route path={`${path}/review`}>
    <Review></Review>
</Route>


</Switch> */}

        </div>



    );
};

export default Dashboard;



