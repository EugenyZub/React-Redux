import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry/';

import './menu-list.scss';

class MenuList extends Component {

    // onError = () => {
        
    //     this.props.menuError()
    //     console.log(this.props.error)
    // }

    componentDidMount() {
        
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getResource()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError())
            //this.foo.born = 0;
    }

    componentDidCatch() {
        // this.props.menuError();
    }

    render() {
        const {menuItems, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }
        console.log(error)
        if (error) {
            return (
                    <ErrorBoundry>
                        <div className='whiteText'>Возникла непредвиденная ошибка!</div>
                        <img src='../../img/error.jpg' alt='error'></img>
                    </ErrorBoundry>
            )
        }

        //const err = error && <ErrorBoundry/>;
        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));