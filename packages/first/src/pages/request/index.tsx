import React, { useEffect, useRef, useState } from 'react';
import { Spin } from 'antd';

import { get } from '../../serve';

export const RequestDemo = () => {
  const timerRef = useRef<NodeJS.Timeout>();
  const [execTimer, setExecTimer] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState<string>();

  const fetch = async () => {
    const res = await get<{ name: string }>('/api');
    console.log('res', res);
    setExecTimer(true);
  };

  useEffect(() => {
    if (execTimer) {
      const _timer = setInterval(() => {
        fetch();
      }, 1000);
      timerRef.current = _timer;
    }
  }, [execTimer]);

  useEffect(() => {
    fetch();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <Spin spinning={loading}>
      <div style={{ width: '100px', height: '100px' }}>{text}</div>
    </Spin>
  );
};
