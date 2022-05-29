import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';

import './index.less'

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className='admin_wrapper'>
            <Header className="header_wrapper">
                <div className="logo_wrapper">
                    <a>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
                        <h1>Ant Design Pro</h1>
                    </a>
                </div>
            </Header>

            <Layout className='sider_content_wrapper'>
                <Sider className='sider_wrapper'
                    collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                    trigger={<SiderTrigger collapsed={collapsed}/>} width={208} collapsedWidth={48}
                >
                    <Menu className='menu' defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>

                <Layout className='content_wrapper'>
                    <Content>
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            Bill is a cat.
                        </div>

                        
                    </Content>

                    <Footer
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

const SiderTrigger = (props) => {
    const items = [
        { key: 'item-1', icon: props.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }
    ];

    return (
        <div>
            <Menu items={items} selectable={false} style={{"width": "100%"}}/>
        </div>
    )
}

export default Admin;