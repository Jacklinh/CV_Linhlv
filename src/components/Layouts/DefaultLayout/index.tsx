
import { Layout } from 'antd';
import MenuDefault from '../MenuDefault';
import AboutMe from '../../AboutMe';
  
const { Sider, Content } = Layout;
const DefaultLayout = () => {
    return (
        <Layout className='wrapper'>
            <Sider className='siderbar_wrap'>
                <MenuDefault />
            </Sider>
            <Layout>
                <Content className='content_wrap'>
                    <AboutMe />
                </Content>
            </Layout>
        </Layout>
    )
}

export default DefaultLayout