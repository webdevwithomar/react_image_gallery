import React from 'react';
import loading from '../img/loading.gif';

const Loading = () => {
  return (
    <div>
      <img src={loading} alt="loading images" className="loading" />
    </div>
  );
}

export default Loading;