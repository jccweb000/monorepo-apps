import React, { useState } from 'react';

export const Demo = () => {
  const [name, setName] = useState();

  return (
    <div>
      <span>click</span>
      {name}
    </div>
  );
};
