import React, { useEffect } from 'react';
import './style.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('javascript', javascript);

export default function App() {
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
    </div>
  );
}

// https://www.npmjs.com/package/highlight.js?activeTab=readme#es6-modules--import
