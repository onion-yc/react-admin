import React, { Component } from 'react';
import { Icon, Menu } from "antd";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import menuList from '../../config/menu-config';

import './index.less'
import logo from '../../assets/images/logo.png';
const { SubMenu, Item } = Menu;


export default class LeftNav extends Component {
  // static propTypes = {
  //   collapsed: PropTypes.bool.isRequired
  // };
  // state={
  //   collapsed:true
  // }

    createMenu = (menu) => {
      return <Item key={menu.key}>
        <Link to={menu.key}>
          <Icon type={menu.icon} />
          <span>{menu.title}</span>
        </Link>
      </Item>
    }
  //render 之前只做一次
  componentWillMount() {
    //根据menuList生成菜单
    this.menus =menuList.map((menu) => {
      // 判断是一级菜单还是二级菜单
      const children = menu.children;
      if (children) {
        //二级菜单
        return <SubMenu
            key={menu.key}
            title={
              <span>
                  <Icon type={menu.icon} />
                  <span>{menu.title}</span>
                </span>
            }
          >
          {
           children.map((item) => this.createMenu(item))
          }
          </SubMenu>;
      } else {
        //一级菜单
        return this.createMenu(menu);
      }
    })
  }

  render() {
    const { collapsed } = this.props;
    // console.log(collapsed)

    return <div>
      <Link className="left-nav-logo" to='/home'>
        <img src={logo} alt="logo"/>
        <h1 style={{display: collapsed ? 'none' : 'block'}}>硅谷后台</h1>
      </Link>
      <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
        {
          this.menus
        }

        {/*<Item key="/home">*/}
          {/*<Link to="/home">*/}
            {/*<Icon type="home" />*/}
            {/*<span>首页</span>*/}
          {/*</Link>*/}
        {/*</Item>*/}
        {/*<SubMenu*/}
          {/*key="sub1"*/}
          {/*title={*/}
            {/*<span>*/}
                  {/*<Icon type="appstore" />*/}
                  {/*<span>商品</span>*/}
                {/*</span>*/}
          {/*}*/}
        {/*>*/}
          {/*<Item key="/category">*/}
            {/*<Link to="/category">*/}
              {/*<Icon type="bars" />*/}
              {/*<span>品类管理</span>*/}
            {/*</Link>*/}
          {/*</Item>*/}
          {/*<Item key="4">*/}
            {/*<Icon type="tool" />*/}
            {/*<span>商品管理</span>*/}
          {/*</Item>*/}
        {/*</SubMenu>*/}
        {/*<Item key="5">*/}
          {/*<Icon type="user" />*/}
          {/*<span>用户管理</span>*/}
        {/*</Item>*/}
        {/*<Item key="6">*/}
          {/*<Icon type="safety-certificate" />*/}
          {/*<span>权限管理</span>*/}
        {/*</Item>*/}
        {/*<SubMenu*/}
          {/*key="sub2"*/}
          {/*title={*/}
            {/*<span>*/}
                  {/*<Icon type="area-chart" />*/}
                  {/*<span>图像图表</span>*/}
            {/*</span>*/}
          {/*}*/}
        {/*>*/}
          {/*<Item key="7">*/}
            {/*<Icon type="bar-chart" />*/}
            {/*<span>柱形图</span>*/}
          {/*</Item>*/}
          {/*<Item key="8">*/}
            {/*<Icon type="line-chart" />*/}
            {/*<span>折线图</span>*/}
          {/*</Item>*/}
          {/*<Item key="9">*/}
            {/*<Icon type="pie-chart" />*/}
            {/*<span>饼图</span>*/}
          {/*</Item>*/}
        {/*</SubMenu>*/}
      </Menu>
    </div>
  }
}