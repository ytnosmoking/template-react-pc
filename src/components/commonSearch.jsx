import { Input } from 'antd';
const { Search } = Input;

function CommonSearch({ onChange, onSearch, value, placeholder = '输入标题' }) {
  return (
    <Search
      allowClear
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onSearch={onSearch}
      enterButton
    />
  );
}

export default CommonSearch;
