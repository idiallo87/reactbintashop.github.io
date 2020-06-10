import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo2.png";
import styled from 'styled-components';
import { ButtonContainer } from "./Button";
import Logoshop from './logoshop/Logoshop';

export default class Navbar extends Component {
    render() {
        return ( <
            >
            <
            Logoshop / >
            <
            NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5" >

            <
            Link to = "/" >
            <
            img src = { logo }
            alt = "store"
            className = "navbar-brand" / >
            <
            /Link> <
            ul className = "navbar-nav align-items-center" >
            <
            li className = "nav-item ml-5" >
            <
            div className = "links" >
            <
            Link to = "/"
            className = "nav-link" >
            <
            i class = "fab fa-product-hunt" > < /i> produits <
            /Link> <
            /div>

            <
            /li> <
            /ul> <
            Link to = "/cart"
            className = "ml-auto" >
            <
            ButtonContainer >
            <
            span className = "mr-2" >
            <
            i className = "fas fa-shopping-basket" / >
            <
            /span>
            my cart <
            /ButtonContainer> <
            /Link> <
            /NavWrapper> <
            />
        )
    }
}
const NavWrapper = styled.nav `
 background: linear-gradient(to right, #000 10%, #FFF);
 /*box-shadow: 1px 1px 10px 1px #656565;*/
 .nav-link{
    background: -webkit-linear-gradient( left, #651FFF, #18FFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
     font-weight: bold;
     margin: 0 auto;
     font-size: 1.6rem;
     text-transform: capitalize;
 }
 .nav-link i{
     margin: 0 10px;
 }
 @media screen and (max-width: 620px) {
    .navbar-brand{
        display: none;
    }
    .nav-link {
        background: -webkit-linear-gradient( right, #651FFF, #18FFFF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        float: right;
    }
}
 `;