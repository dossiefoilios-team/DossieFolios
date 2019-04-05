import React, { Component } from 'react';
import './Sidebar.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
export default class Sidebar extends Component
{
     
    render()
    {
        return(
            <div className="sidebar">
            
            <div className="box">
                <ul>
                    <li><ion-icon name="clock"></ion-icon>
                    <Link to='/x'>
                    Dashboard</Link></li>
                    <li> <ion-icon name="person"></ion-icon>
                    <Link to='/create'>
                    Create Profile</Link>
                     </li>
                    <li><Link to='/update'><ion-icon name="brush"></ion-icon>Update</Link></li>
                     
                </ul>
            </div>
            </div> 
        );
    }
}