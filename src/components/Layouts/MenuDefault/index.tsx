
import { UploadOutlined,UserOutlined} from '@ant-design/icons';
import { Menu} from 'antd';
import Avatar from '../../Avatar';
const MenuDefault = () => {
	return (
		<>	
			<Avatar />
			<Menu
				className='box_menu'
				theme="dark"
				mode="inline"
				defaultSelectedKeys={['1']}
				items={[
					{
					key: '1',
					icon: <UserOutlined />,
					label: 'About Me',
					},
					{
					key: '2',
					icon: <UserOutlined />,
					label: 'About Me',
					},
					{
					key: '3',
					icon: <UploadOutlined />,
					label: 'nav 3',
					},
				]}
			/>
		</>
	)
}

export default MenuDefault