import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';

import './index.less'

const { Sider } = Layout;


const SiderMenu = (props) => {
    const { items } = props
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider className='sider_wrapper'
            collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
            trigger={<SiderTrigger collapsed={collapsed} />} width={208} collapsedWidth={48}
        >
            <Menu className='menu' defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}

const SiderTrigger = (props) => {
    const items = [
        { key: 'item-1', icon: props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
    ];

    return (
        <div className="sider_trigger_wrapper">
            <Menu className='menu' items={items} selectable={false} />
        </div>
    )
}

export default SiderMenu;