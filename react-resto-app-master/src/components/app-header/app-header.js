import React from 'react';
import {Link} from 'react-router-dom';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {connect} from 'react-redux';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link className="header__link" to='/main'>
                Menu
            </Link>
            <Link className="header__link" to='/cart'>
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({total}) => {
    return {
        total
    }   
}
export default connect(mapStateToProps)(AppHeader);