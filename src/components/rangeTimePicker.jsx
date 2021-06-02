import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
// const format = 'YYYY-MM-DD HH:mm:ss';
const RangeTimePicker = ({
  title = '发布时间',
  code = '：',
  sep = '至',
  placeholder = ['起始时间', '结束时间'],
  range = [],
  format = 'YYYY-MM-DD HH:mm:ss',
  change,
  showValue = { start: '00:00:00', end: '23:59:59', type: 'HH:mm:ss' },
}) => {
  return (
    <>
      <Space>
        {title}
        {code}
      </Space>
      <RangePicker
        separator={sep}
        placeholder={placeholder}
        value={range}
        format={format}
        onChange={change}
        showTime={{
          defaultValue: [
            moment(showValue.start, showValue.type),
            moment(showValue.end, showValue.type),
          ],
        }}
      />
    </>
  );
};

export default RangeTimePicker;
