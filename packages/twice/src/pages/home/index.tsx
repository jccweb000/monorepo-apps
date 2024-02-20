import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home Page
      <Button
        onClick={() => {
          navigate('/home/detail');
        }}
      >
        detail
      </Button>
    </div>
  );
};

export default HomePage;
