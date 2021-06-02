import { Table } from 'antd';

import { useEffect, useState } from 'react';
const CommonTable = ({
  selection = null,
  loading = true,
  page = 1,
  pageSize = 10,
  total = 1,
  showSizeChanger = true,
  showQuickJumper = true,
  changePage,
  columns = [],
  data = [],
  f = null,
  s = [],
}) => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fcont = f.current;
    const sH = s.reduce((pre, cur) => {
      return pre + cur.current.clientHeight;
    }, 0);
    function setTableScroll() {
      const x = fcont.clientWidth;
      const y = fcont.clientHeight;
      // console.log(x);
      // console.log(y);
      // console.log(sH);
      // console.log(y - sH);
      console.log(`x:${x}, y:${y}, sH:${sH}, y-sH=${y - sH}, defaultH =150`);
      setScroll({ x, y: y - sH - 150 });
    }
    window.addEventListener('resize', setTableScroll);
    setTableScroll();
    return () => {
      window.removeEventListener('resize', setTableScroll);
    };
  }, [f, s]);

  return (
    <Table
      rowSelection={selection}
      style={{ paddingTop: 10 }}
      loading={loading}
      pagination={{
        current: page,
        pageSize: pageSize,
        total: total,
        showSizeChanger,
        showQuickJumper,
        showTotal: (total) => `总共 ${total} 条`,
        onChange: changePage,
      }}
      columns={columns}
      dataSource={data}
      scroll={scroll}
    />
  );
};

export default CommonTable;
