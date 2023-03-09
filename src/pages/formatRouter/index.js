import React, { useRef, useState } from 'react';
const App = () => {
  const text = useRef();
  const [result, setResult] = useState('');
  const [data, setData] = useState('');
  const [index, setIndex] = useState(1);
  const [appCode, setAppCode] = useState('');
  const [parentCode, setParentCode] = useState('');

  function formatRouter(req, index, appCode, parentCode) {
    const list = [];
    const a = {
      appCode: appCode,
      uniqueCode: req.name,
      parentUniqueCode: parentCode,
      type: 1,
      level: 1,
      name: req.meta.title,
      code: req.name,
      index,
      icon: '',
      url: `/${req.path}`,
      remark: null,
      isHidden: req.meta.hideMenu ? 1 : 0,
      extra: null,
    };

    function children(parent, child) {
      child.children.forEach(item => {
        const b = {
          appCode: appCode,
          uniqueCode: item.name,
          parentUniqueCode: parent.uniqueCode,
          type: 1,
          level: parent.level + 1,
          name: item.meta.title,
          code: item.name,
          index: 100,
          icon: '',
          url: `${parent.url}/${item.path}`,
          remark: null,
          isHidden: item.meta.hideMenu ? 1 : 0,
          extra: null,
        };

        list.push(b);

        if (item.children) {
          children(b, item);
        }
      });
    }
    list.push(a);
    children(a, req);
    setResult(JSON.stringify(list));
  }

  function onClick() {
    formatRouter(eval(`(${data})`), index, appCode, parentCode);
  }

  return (
    <div>
      <h6>
        <div>
          <span>排序：</span>
          <input
            type="text"
            value={index}
            onChange={e => {
              setIndex(e.target.value);
            }}
          />
        </div>
      </h6>
      <h6>
        <div>
          <span>appCode：</span>
          <input
            type="text"
            value={appCode}
            onChange={e => {
              setAppCode(e.target.value);
            }}
          />
        </div>
      </h6>
      <h6>
        <div>
          <span>parentCode：</span>
          <input
            type="text"
            value={parentCode}
            onChange={e => {
              setParentCode(e.target.value);
            }}
          />
        </div>
      </h6>
      <h6>
        <div>
          <span>router数据：</span>
          <textarea
            rows={5}
            value={data}
            onChange={e => {
              setData(e.target.value);
            }}
          ></textarea>
        </div>
      </h6>
      <button onClick={onClick}>转换</button>
      <h6>
        <div>
          <div>
            导入结果：
            <button
              onClick={() => {
                text.current.select();
                document.execCommand('copy');
              }}
            >
              复制
            </button>
          </div>
          <textarea ref={text} rows={5} defaultValue={result}></textarea>
        </div>
      </h6>
    </div>
  );
};

export default App;
