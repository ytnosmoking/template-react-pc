import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col, Form, Input, Typography } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';
import './index.less';

const { Title } = Typography;

function Login() {
  //  路由 history
  const history = useHistory();
  //  全局 状态 token信息
  // const globalState = useSelector((state) => state.global);
  // dispatch
  // const dispatch = useDispatch();
  const layout = {
    labelCol: { span: 4, offset: 2 },
    wrapperCol: { span: 16 },
    labelAlign: 'left',
  };
  // const tailLayout = {
  //   wrapperCol: { offset: 8, span: 16 },
  // };

  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/')
    //   这里有异步请求信息 数据
    // dispatch(loginAction(values));
    // dispatch({
    //   type: 'LOGIN',
    //   payload: {
    //     token: '1',
    //     info: values,
    //   },
    // });
    // history.push('/base');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // useEffect(() => {
  //   const { token } = globalState;
  //   if (token && token.access_token) {
  //     history.push('/');
  //   }
  // }, [globalState, history]);

  return (
    <Row justify="center" align="middle" className="login">
      <Col className="login-cont center">
        <Form
          className="w100"
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Title level={3} className="fz20 center">
            运营平台管理系统
          </Title>
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: '输入账号!' }]}
          >
            <Input placeholder="账号" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '输入密码!' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          {/* <Form.Item {...tailLayout}> */}
          <div className="center">
            {/* <Form.Item  > */}
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            {/* </Form.Item> */}
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
