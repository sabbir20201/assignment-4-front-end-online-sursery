import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//   }),
// );

const items: MenuProps["items"] = [
  {
    key: '2',
    label: <NavLink to="/admin">Dashboard</NavLink>,
  },
  {
    key: '3',
    label: "Product Management",
    children: [
      {
        key: '4',
        label: <NavLink to="/admin/create-product">Create a Product</NavLink>,
      },
      {
        key: '5',
        label: <NavLink to="/admin/get-products">Get all Product</NavLink>,
      },
    ]
  },
  {
    key: '11',
    label: <NavLink to="/">Home</NavLink>,
  },
]
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{height: '100vh'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          trigger={null} collapsible collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
        {/* colorBgContainer */}
          <Header style={{ padding: 0, background: "#234e30"}}>
            <h1 className='text-3xl text-bold text-white'>Dashboard</h1>
          </Header>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Content style={{ margin: '24px 16px 0'}}>
            <div
              style={{
                padding: 24,
                // minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* the main content  here */}
            
              <Outlet></Outlet>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
        </Layout>
      </Layout>

    </div>
  );
};

export default AdminLayout;