import React, { useEffect } from 'react';
import './style.css';
import { Button, message } from 'antd';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('javascript', javascript);

export default function App() {
  const response = {
    columns: [
      { key: 'name', dataIndex: 'name', title: '姓名' },
      { key: 'age', dataIndex: 'age', title: '年龄' },
      { key: 'gender', dataIndex: 'gender', title: '性别' },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        align: 'center',
        render: (value, record) => {
          return (
            <>
              <Button onClick={() => message.info('删除')}>删除</Button>
            </>
          );
        },
      },
    ],
    dataSource: [{ id: 123, name: 'zs', age: 22, gender: '男' }],
    jsx: `
      <Table rowKey='id' columns={columns} dataSource={dataSource} />
    `,
    // jsx: `<button onClick={onClick}>hello world</button>`,
  };

  useEffect(() => {
    let obj = {
      f: function f() {
        let stuff = 'hi';
        console.log('hi');
      },
    };
    let code = obj.f.toString();
    console.log(code);
    // eval(code);
    // f();
  }, []);
  const js = hljs.highlight(`console.log("hello world")`, {
    language: 'javascript',
  });
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <code dangerouslySetInnerHTML={{ __html: js.value }}></code>
      <code
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(response.columns[3].render.toString(), {
            language: 'javascript',
          }).value,
        }}
      ></code>
    </div>
  );
}

// https://www.npmjs.com/package/highlight.js?activeTab=readme#es6-modules--import
