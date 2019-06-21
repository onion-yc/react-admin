import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './index.less';

import logo from './logo.png';

const Item = Form.Item;


export default class Login extends Component {

  login = (e) => {
    e.preventDefault();

  }

  render() {
    return <div className="login">
      <header className="login-header">
        <img src={logo} alt="logo"/>
        <h1>React项目：后台管理系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登录</h2>
        <Form onSubmit={this.login} className="login-from">
          <Item>
            <Input className="login-input" prefix={<Icon type="user" />} placeholder="用户名"/>
          </Item>
          <Item>
            <Input className="login-input" prefix={<Icon type="lock" />} placeholder="密码" type="password"/>
          </Item>
          <Item>
            <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
          </Item>
        </Form>
      </section>
    </div>
  }
}