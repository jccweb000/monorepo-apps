import React from 'react';
import { MehOutlined } from '@ant-design/icons';

export const MissingPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <MehOutlined style={{ fontSize: 30, marginBottom: 10, color: '#ccc' }} />
      <span style={{ fontSize: 20, color: '#ccc' }}>404</span>
    </div>
  );
};
