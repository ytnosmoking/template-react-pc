import { useHistory } from 'react-router-dom';

import { Button, Divider } from 'antd';

const HomeIndex = () => {
  const history = useHistory();
  return (
    <div>
      this is Home Index View
      <Divider />
      <Button onClick={() => history.push('/home/test')}>
        go to home /test
      </Button>
    </div>
  );
};

export default HomeIndex;
