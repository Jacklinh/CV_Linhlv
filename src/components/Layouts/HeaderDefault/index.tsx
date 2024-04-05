import React, { useState } from 'react';
import { Layout, Button} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
const { Header} = Layout;
const HeaderDefault = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Header>
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
        </Header>
    )
}

export default HeaderDefault