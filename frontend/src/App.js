// import { MathJaxContext } from "better-react-mathjax";
// import Navbar from "./components/Navbar";
// // import MyComponent from "./components/MyComponent";
// import MainPage from "./MainPage";
// import DropdownFilter from "./components/DropdownFilter";
// import QuestionPage from "./QuestionPage";

// function App() {
//   const questionId = 1;
//   const config = {
//     loader: { load: ["input/asciimath"] },
//   };

//   return (
//     <MathJaxContext config={config}>
//       <Navbar />
//       {/* <MainPage /> */}
//       <QuestionPage id={questionId}/>
//     </MathJaxContext>
//   );
// }

// export default App;

// import React from "react";
// import { Layout, Menu, Space, Table, Tabs } from "antd";
// import Navbar from "./components/Navbar";
// import { Footer, Header } from "antd/es/layout/layout";
// import Submission from "./Submission";

// const { Content } = Layout;
// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Joe Dow",
//     age: 23,
//     address: "New Delhi No. 1 Lake Park",
//   },
// ];
// const App = () => (
//   <Layout>
//     <Header>
//       <Navbar />
//     </Header>
//     <Layout style={{ height: "88vh" }}>
//       <Content>
//       <Tabs
//         defaultActiveKey="1"
//         centered
//         items={['Problem', 'Submission', 'Results', 'Statistics'].map((option, i) => {
//           return {
//             label: option,
//             key: i+1,
//             // children: <Table columns={columns} dataSource={data} pagination={{ pageSize: i+1 }} />,
//             children: <Submission />,
//           };
//         })}
//       />
        
//       </Content>
//       <Footer style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0' }}>
//           <h4>Try these next :-</h4>
//           <a href="/link1">Line Segment Intersection</a>
//           <a href="/link2">Josephus Queries</a>
//           <a href="/link3">Dynamic Range Sum Queries</a>
//       </Footer>
//     </Layout>
//   </Layout>
// );
// export default App;

import React, { useState } from 'react';
import MonacoEditor from './MonacoEditor';

const App = () => {
    const [code, setCode] = useState('');
    const [mode, setMode] = useState('light');
    const [fontSize, setFontSize] = useState(14);

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    return (
        <div style={{ height: '100vh' }}>
            <MonacoEditor
                language="javascript"
                value={code}
                onChange={handleCodeChange}
                mode={mode}
                fontSize={fontSize}
            />
            <div>
                <label>
                    Mode:
                    <select value={mode} onChange={(e) => setMode(e.target.value)}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>
                <label>
                    Font Size:
                    <input
                        type="number"
                        value={fontSize}
                        onChange={(e) => setFontSize(parseInt(e.target.value))}
                    />
                </label>
            </div>
        </div>
    );
};

export default App;
