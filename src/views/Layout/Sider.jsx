import React, { useMemo, memo } from 'react';
import { Menu } from 'antd';
import { Link, useLocation, useHistory } from 'react-router-dom';

const styles = {
  menu: {
    fontSize: 16,
    // color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
  },
  active: {
    backgroundColor: '#1890ff',
  },
};

const { SubMenu } = Menu;

const MenuListItem = memo(({ list = [] }) => {
  console.log(1);
  console.log(list);

  return (
    <>
      {list.length > 0
        ? list.map((item) => {
            if (item.children && item.children.length > 0) {
              return (
                <SubMenu title={item.title} key={item.to}>
                  <MenuListItem list={item.children} />
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item
                  style={{
                    ...styles.item,
                  }}
                  // key={item.id}
                  key={item.to}
                >
                  <Link to={item.to}>{item.title}</Link>
                </Menu.Item>
              );
            }
          })
        : null}
    </>
  );
});
const SideMenu = ({
  list,
  defaultOpenKeys = [],
  defaultSelectedKeys = [],
  collapsed,
  location,
}) => {
  // const location = useLocation();
  // console.log(location);
  console.log('render sideMenu');

  // let openKeys = '/home';

  // const openKeys = useMemo(() => {
  //   const arr = location.pathname.split('/');

  //   if (arr.length > 2) {
  //     return `/${arr[1]}`;
  //   }
  //   return null;
  // }, [location.pathname]);

  return (
    <Menu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      // selectedKeys={[location.pathname]}
      mode="inline"
      theme="dark"
      // inlineCollapsed={collapsed}
      style={styles.menu}
    >
      {/* <MenuListItem list={list} /> */}
      {list.map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <SubMenu title={item.title} key={item.to}>
              {item.children.map((jtem) => {
                return (
                  <Menu.Item style={styles.item} key={jtem.to}>
                    <Link to={jtem.to}>{jtem.title}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        } else {
          return (
            <Menu.Item style={styles.item} key={item.to}>
              <Link to={item.to}>{item.title}</Link>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};

export default SideMenu;
