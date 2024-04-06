import { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, LoginOutlined, CodeOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false); // Assuming loggedIn state based on cookies.jwt

  useEffect(() => {
    // Check if cookies.jwt is present (mocked here with a simple check)
    const jwtToken = localStorage.getItem('jwt');
    setLoggedIn(!!jwtToken);
  }, []);

  const handleSignOut = () => {
    // Clear JWT token from localStorage or cookies
    localStorage.removeItem('jwt');
    // Redirect to sign-in page or homepage
    history.push('/signin');
  };

  return (
    <Header style={{ padding: 0 }}> {/* Remove default padding */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Menu.Item key="1" onClick={() => history.push('/codex')} style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <CodeOutlined style={{ fontSize: '18px' }} />Codex
        </Menu.Item>
        {loggedIn ? (
          <Menu.Item key="2" onClick={handleSignOut}>
            <LogoutOutlined style={{ fontSize: '18px' }} />
          </Menu.Item>
        ) : (
          <span>
            <Menu.Item key="2" onClick={() => history.push('/signin')} >
              <LoginOutlined style={{ fontSize: '18px' }} />
            </Menu.Item>
            <Menu.Item key="3" onClick={() => history.push('/theme')} >
              <SunOutlined style={{ fontSize: '18px' }} />
            </Menu.Item>
            <Menu.Item key="3" onClick={() => history.push('/theme')} >
              <MoonOutlined style={{ fontSize: '18px' }} />
            </Menu.Item>
          </span>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
