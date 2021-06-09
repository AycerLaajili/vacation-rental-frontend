import { Layout, Menu, Breadcrumb } from 'antd';
import HomeManagement from '../views/HomeManagement/HomeManagement.js'
function MainLayout(props) {
    const { Header, Content, Footer } = Layout;
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Home Management</Menu.Item>
                    <Menu.Item key="2">Reservation Management</Menu.Item>
                    <Menu.Item key="3">About</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
                <br />
                <br />
                <div className="site-layout-content">
                    <HomeManagement />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Vacation Rental ©2021 Created by Aycer & Wassim</Footer>
        </Layout>
    );
};
export default MainLayout;