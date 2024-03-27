import axios from 'axios';
import React, { useEffect } from 'react';

export const RequestDemo = () => {
  const fetch = async () => {
    const res = await axios.get('/api');
    console.log('res', res);
    const res2 = await axios.get('/api/detail');
    console.log('res2', res2);
  };

  useEffect(() => {
    fetch();
  }, []);
  return <div>require</div>;
};
