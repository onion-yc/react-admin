import React, { Component } from 'react';
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav';
import HeaderMain from '../../components/header-main';
import { getItem } from '../../utils/storage-tools';
import { reqValidateUserInfo } from "../../api";

const { Header, Content, Footer, Sider } = Layout;

export default class Admin extends Component {
  state = {
    collapse: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  async componentWillMount () {
    //判断登录是否成功
    const user = getItem();

    //优化登录成功不想再重新发送请求，redux

    //用户是刷新进来的
    if (user && user._id) {
      //发送请求验证 用户信息是否合法
      //若果用户是登录进来的，就不需要。如果用户是使用之前的值，刷新访问进来的，就需要

      const result = await reqValidateUserInfo(user._id);

      if (!result) return;
    }

    this.props.history.replace('/login');
  }

    render() {
      const { collapsed } = this.state;
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <LeftNav collapsed={collapsed}/>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0, minHeight: 100 }}>
              <HeaderMain />
            </Header>
            <Content style={{ margin: '25px 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                欢迎使用硅谷后台管理系统
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
          </Layout>
        </Layout>
      );
   }
  }