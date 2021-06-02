import React, {
  memo,
  useCallback,
  // useEffect,
  useMemo,
  // useState
} from 'react';
import {
  Layout,
  // Switch as OpenSwitch,
} from 'antd';
// import { otherRoutes as routes } from 'routes/index';
// import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
// import {
//   // login as LoginAction,
//   getMenuList,
// } from 'store/actions/global';
import './index.less';
import SiderMenu from './Sider';
import BaseHead from './Header';
import Logo from 'assets/logo.svg';

import { otherRoutes } from 'routes/index';
const {
  Header,
  Sider,
  Content,
  // Footer,
} = Layout;

const LayHead = memo(BaseHead);
const LayMenu = memo(SiderMenu);
const BaseLayout = () => {
  const history = useHistory();

  // store  状态
  // const globalState = useSelector((state) => state.global);

  // const { menuList } = globalState;

  // dispatch
  // const dispatch = useDispatch();

  // login logout
  // const login = useCallback(
  //   (params) => {
  //     return dispatch(LoginAction(params));
  //   },
  //   [dispatch]
  // );

  // console.log(history);
  const logout = useCallback(() => {
    return history.push('/login');
  }, [history]);

  const defaultOpenKeys = useMemo(() => {
    const { location } = history;
    const arr = location.pathname.split('/');
    console.log(arr)
    if (arr.length > 2) {
      return [`/${arr[1]}`];
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultSelectedKeys = useMemo(() => {
    const { location } = history;
    return [location.pathname];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [checked, setChecked] = useState(false);

  // 如果没有 token 应是进不来这个页面的 这里可以做其他用户路由权限控制
  // const redirect = useMemo(() => {
  //   const { token } = globalState;
  //   return token && token.access_token ? getterRoutes[0]?.to : '/login';
  // }, [getterRoutes, globalState]);

  // 全局监听 token 没有 指向login
  // useEffect(() => {
  //   if (!globalState.token) {
  //     history.push('/login');
  //   }
  // }, [globalState, globalState.token, history]);

  // useEffect(() => {
  //   if (!menuList || menuList.length === 0) {
  //     console.log(1);
  //     dispatch(getMenuList());
  //   }
  // }, [dispatch, menuList]);

  return (
    <Layout className="h100">
      <Header>
        <LayHead logo={Logo} logout={logout} />
      </Header>
      <Layout>
        <Sider className="base-sider">
          <LayMenu
            list={otherRoutes}
            defaultOpenKeys={defaultOpenKeys}
            defaultSelectedKeys={defaultSelectedKeys}
          />
        </Sider>
        <Content className="base-cont">
          <Switch>
            {otherRoutes.map((route) => {
              return (
                <Route
                  key={route.to}
                  path={route.to}
                  component={route.view}
                ></Route>
              );
            })}
            <Route path="*">
              <Redirect to={otherRoutes[0].to} />
            </Route>
          </Switch>
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default BaseLayout;
