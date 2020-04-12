import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    display:flex;
    width:100px;
    height:100%;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:960px;
    height:100%;
    padding:0 15px;

`

export const NavItem = styled.div`
    display:flex;
    align-items:center;
    height:100%;
`

export const NavItemList = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    color:#333;
    font-size:17px;
    padding:15px;
    box-sizing:border-box;
    cursor: pointer;
    &.active {
        color:#ea6f5a
    }
    &.right{
        color:#969696;
    }
    &.clear-padding{
        padding:0;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:240px;
    height:38px;
    font-size:14px;
    border-radius:19px;
    border:1px solid #eee;
    padding:0 40px 0 20px;
    box-sizing:border-box;
    background:#eee;
    outline:none;
    &.focused{
        width:320px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 320px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 240px;
    }
`
export const NavSearchBtn = styled.div`
    position: absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    top: 50%;
    right: 5px;
    width: 30px;
    height: 30px!important;
    margin-top:-15px;
    color: #969696;
    &.focused{
        background:#969696;
        color:#fff;
        border-radius:50%
    }
`

export const Addition = styled.div`
    display:flex;
    align-items:center;
    height:100%;
`

export const AdditionItem = styled.div`
    &.sign-up{
        display:flex;
        justify-content:center;
        align-items:center;
        width: 80px;
        height: 38px;
        line-height: 24px;
        margin:0 5px 0 15px;
        border: 1px solid rgba(236,97,73,.7);
        border-radius: 20px;
        font-size: 15px;
        color: #ea6f5a;
        background-color: transparent;
        cursor: pointer;
    }
    &.sign_in{
        display:flex;
        justify-content:center;
        align-items:center;
        width: 100px;
        height: 40px;
        line-height: 24px;
        margin: 0 12px;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
    }
`
