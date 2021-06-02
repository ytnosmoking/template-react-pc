import React, { Component, useState, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = (txt = 'loading') => (
  <div>
    <LoadingOutlined style={{ fontSize: 24 }} spin />
    <br />
    {/* <div>{txt}</div> */}
  </div>
);
function Loadable() {
  return <div>this is Loadable 。。。。。loading</div>;
}

const importView = (view) => import(`views/${view}`);
const importCom = (com) => import(`common/${com}`);

// 有问题的
// export const aysncView = (view) => {
//   return () => {
//     const [load, setload] = useState(true);
//     const [Com, setcom] = useState(null);
//     async function LoadView() {
//       const { default: component } = await importView(view);
//       setcom(component);
//       setload(false);
//     }
//     useEffect(() => {
//       // async function LoadView() {
//       //   const { default: component } = await importView(view);
//       //   setcom(component);
//       //   setload(false);
//       // }
//       LoadView();

//       // const { default: component } = await importView(view);
//       // setcom(component);
//       // setload(false)
//       // return <div className="center fz20 h100">loading ....</div>;
//     }, [load]);

//     return (
//       <>
//         {load ? (
//           <Spin tip="this is loading ..." />
//         ) : (
//           // <div className="center fz20 h100">loading ....</div>
//           <Com data={Com} />
//         )}
//       </>
//     );
//   };
// };

// ok
export const asyncComponent = (view, isView = true, delay = 0) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        state: false,
        Com: null,
      };
    }

    async componentDidMount() {
      const getView = isView ? importView : importCom;
      const { default: component } = await getView(view);
      setTimeout(() => {
        this.setState({
          Com: component,
        });
      }, delay);
    }
    render() {
      let { Com } = this.state;
      return (
        <>
          {this.state.Com ? (
            <Com data={this.state.data} />
          ) : (
            <Spin
              className="h100 w100 center-y fz20"
              indicator={antIcon()}
              tip={`loading ....`}
            />
          )}
        </>
      );
    }
  };
};

export default Loadable;
