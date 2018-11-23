import React, { Component } from 'react';
import { Layout, Menu, Carousel, Row, Col, List, Avatar, Icon } from 'antd';
import './style/MainLayout.css';

const { Header, Content, Footer } = Layout;

const mobile = { xs: 8, sm: 16, md: 24}

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class MainLayout extends Component {
    render () {
        return (
            <Layout className="layout">
                <Header >
                  <div className="logo" />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">About</Menu.Item>
                    <Menu.Item key="3">Contact Us</Menu.Item>
                  </Menu>
                </Header>
                  <Carousel vertical autoplay={true}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                  </Carousel>
                <Content>
                  <div style={{ background: '#fff', padding: 24, minHeight: 350 }}>
                  
                  <div>
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                      onChange: (page) => {
                        console.log(page);
                      },
                      pageSize: 3,
                    }}
                    dataSource={listData}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                      <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={item.avatar} />}
                          title={<a href={item.href}>{item.title}</a>}
                          description={item.description}
                        />
                        {item.content}
                      </List.Item>
                    )}
                  />
                  </div>
                  <div style={{padding: "20px 0"}}>
                  <Row gutter={mobile}>
                    <Col xs={24} sm={12} md={6} span={6}><div className="gutter-box">col-6</div></Col>
                    <Col xs={24} sm={12} md={6} span={6}><div className="gutter-box">col-6</div></Col>
                    <Col xs={24} sm={12} md={6} span={6}><div className="gutter-box">col-6</div></Col>
                    <Col xs={24} sm={12} md={6} span={6}><div className="gutter-box">col-6</div></Col>
                  </Row>
                  </div>
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  IndiaNow ©2018 All Rights Received
                </Footer>
              </Layout>
        );
    }
}

export default MainLayout;