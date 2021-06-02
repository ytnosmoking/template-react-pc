import { Checkbox } from 'antd';

const ChangeCheckbox = ({ lists = [], change }) => {
  return (
    <Checkbox.Group onChange={change} >
      {lists.map((list) => {
        return (
          <Checkbox key={list.value} value={list.value}>
            {list.label}
          </Checkbox>
        );
      })}
    </Checkbox.Group>
  );
};

export default ChangeCheckbox;
