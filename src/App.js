
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { useMemo } from 'react'
import { routes } from 'routes/index'
import 'styles/App.less'

// import { ConfigProvider } from 'antd'
// import zhCn from 'antd/lib/locale/zh_CN'
// import { useSelector } from 'react-redux'



function App() {

  return (
    // <ConfigProvider locale={zhCn}>
    <Router>
      <Switch>
        {routes.map(route => {
          return <Route key={route.to} path={route.to} component={route.view} ></Route>
        })}
      </Switch>
    </Router>
    // </ConfigProvider>
  );
}

export default App;
