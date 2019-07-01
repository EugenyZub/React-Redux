import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCard} from '../../actions';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry/';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getResource()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError())
    }

    render() {
        const {menuItems, loading, error, addedToCard} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return (
                    <ErrorBoundry>
                        <div className='whiteText'>Возникла непредвиденная ошибка!</div>
                        <img src='../../img/error.jpg' alt='error'></img>
                    </ErrorBoundry>
            )
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem 
                                    key={menuItem.id} 
                                    menuItem={menuItem}
                                    onAddToCard={() => addedToCard(menuItem.id)}
                                />
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
    menuError,
    addedToCard
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));