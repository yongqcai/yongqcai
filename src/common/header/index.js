import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { HeaderWrapper, Logo, Nav, NavItem, NavItemList, NavSearch, NavSearchBtn, Addition, AdditionItem } from './style';
import { actionCreators } from './store';

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem>
                    <NavItemList className="active">
                        <span className="iconfont menu-icon">&#xe624;</span>
                        <span>首页</span>
                    </NavItemList>
                    <NavItemList>
                        <span className="iconfont menu-icon">&#xe608;</span>
                        <span>下载APP</span>
                    </NavItemList>
                    <NavItemList className='clear-padding'>
                        <CSSTransition
                            in={props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={props.focused ? 'focused' : ''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <NavSearchBtn className={props.focused ? 'focused ' : ''}>
                            <span className="iconfont search-btn">&#xe612;</span>
                        </NavSearchBtn>
                    </NavItemList>
                </NavItem>
                <NavItem>
                    <NavItemList className="right">
                        <span className="iconfont menu-icon">&#xe636;</span>
                    </NavItemList>
                    <NavItemList className="right">登录</NavItemList>
                </NavItem>
            </Nav>
            <Addition>
                <AdditionItem className="sign-up">注册</AdditionItem>
                <AdditionItem className="sign_in">
                    <span className="iconfont menu-icon">&#xe616;</span>
                    <span>写文章</span>
                </AdditionItem>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispathToProps = (dispathch) => {
    return {
        handleInputFocus() {
            dispathch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispathch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)