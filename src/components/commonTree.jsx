import { Tree, Input } from 'antd';
import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTree } from 'store/actions/edu';
const { Search } = Input;

function CommonTree({ styles = { width: 240 }, setSelectId }) {
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const dispatch = useDispatch();
  const originTree = useSelector((state) => state.edu.tree);
  const treeKeys = useSelector((state) => state.edu.treeKeys);
  // 节点 展开 / 关闭
  const onExpand = (expandedKeys) => {
    console.log(expandedKeys);

    setAutoExpandParent(false);
  };

  const selectKeys = (nodes, e) => {
    console.log(nodes);
    const id = nodes && nodes[0];
    if (id) {
      setSelectId(id);
    }
    if (treeKeys.includes(id)) {
      return;
    }
    dispatch({ type: 'treeKeys', payload: id });
    if (id) {
      dispatch(getTree({ id }));
    }
  };

  const treeData = useMemo(() => {
    const keys = [];
    // 默认tree 数据
    const generateTree = (arr = []) => {
      return arr.map((item) => {
        // 先判断根节点 或节点是否有searchValue
        if (item.id === '-1' || item.name.includes(searchValue)) {
          keys.push(item.id);
          const children =
            generateTree(item.nodes).filter((jtem) => jtem) || [];

          return {
            key: item.id,
            title: item.name,
            children: children,
          };
        }
        //  查看节点 没有searchValue时 但是有子节点的情况
        if (item.nodes && item.nodes.length > 0) {
          const children =
            generateTree(item.nodes).filter((jtem) => jtem) || [];
          if (children && children.length > 0) {
            keys.push(item.id);
            return {
              key: item.id,
              title: item.name,
              isLeaf: item.isLeaf,
              children: children,
            };
          }
        }
        return null;
      });
    };

    const gTree = generateTree(originTree);
    return gTree[0]?.children.length > 0 ? gTree : [];
  }, [originTree, searchValue]);

  useEffect(() => {
    if (originTree.length === 0) {
      dispatch({ type: 'treeKeys', payload: -1 });
      dispatch(getTree({}));
    }
  }, [dispatch, originTree]);

  return (
    <div className="h100" style={{ overflowY: 'hidden', ...styles }}>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <Tree
        className="h100 "
        style={{
          whiteSpace: 'nowrap',
          overflowY: 'scroll',
          height: `calc(100% - 40px)`,
        }}
        onExpand={onExpand}
        blockNode
        onSelect={selectKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
      />
    </div>
  );
}

export default CommonTree;
