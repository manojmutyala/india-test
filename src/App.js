import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import { Layout, Menu, Row, Col, List, Avatar, Icon } from 'antd';
import $ from 'jquery';
import './App.css';

const { Header, Content, Footer } = Layout;

const mobile = { xs: 8, sm: 16, md: 24}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
    }
  }
  componentDidMount() {
    this.setState({
      windowHeight: $(window).height(),
    });
  }

  render() {
    return (
      <HashRouter>
        <Layout className="layout">
            <Header>
              <div className="logo">BABAI</div>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><NavLink to="/">Home</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/contact">Contact Us</NavLink></Menu.Item>
              </Menu>
            </Header>
            <Content>
              <div style={{ background: '#fff', padding: 24, minHeight: this.state.windowHeight }}>
              <div style={{padding: "0 0 20px 0"}}>
                <Row gutter={mobile}>
                  <Col xs={24} sm={12} md={6} span={6}><div className="gutter-box">col-6</div></Col>
                  <Col xs={24} sm={12} md={6} span={6}><div className="gutter-box">col-6</div></Col>
                  <Col xs={24} sm={12} md={6} span={6}><div className="gutter-box">col-6</div></Col>
                  <Col xs={24} sm={12} md={6} span={6}><div className="gutter-box">col-6</div></Col>
                </Row>
              </div>
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </Content>
            <Footer className="footer">
              babai-ias ©2018 All Rights Received
            </Footer>
          </Layout>
        </HashRouter>
        );
    }
}

export default App;
