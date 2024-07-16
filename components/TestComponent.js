import React, { useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

const TestComponent = () => {
  useEffect(() => {
    axiosInstance.get('test-endpoint')  // 确保你有一个实际存在的API端点
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      Check the console for API response.
    </div>
  );
};

export default TestComponent;
