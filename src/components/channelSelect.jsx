import { Select } from 'antd';
const { Option } = Select;

const ChannelSelect = ({
  placeholder = '请选择',
  allowClear = true,
  width = 150,
  list = [],
  change,
}) => {
  return (
    <Select
      allowClear
      placeholder={placeholder}
      style={{ width }}
      onChange={change}
    >
      {list.map((item) => {
        return (
          <Option key={item?.value} value={item.value}>
            {item?.label || item?.value}
          </Option>
        );
      })}
    </Select>
  );
};

export default ChannelSelect;
