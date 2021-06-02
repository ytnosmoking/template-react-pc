// import { useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
import { Row, Col, Avatar, Typography, Button } from 'antd';

const { Text } = Typography;

const Header = ({ title = 'template', logo = null, logout = null }) => {
  console.log('render header');
  return (
    <Row className="h100" align="middle" justify="space-between">
      <Col className="center">
        <Avatar shape="square" size={45} src={logo} />
        <Text
          style={{
            paddingLeft: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            letterSpacing: '3px',
          }}
          level={3}
          strong={true}
        >
          {title}
        </Text>
      </Col>

      <Button type="danger" onClick={logout}>
        退出
      </Button>
    </Row>
  );
};
export default Header;
