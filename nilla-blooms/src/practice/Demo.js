import React from 'react';

const Demo = () => {
    const data=[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5}];
    const limit=3;
  const limitedMappedData = data.map((item, index) => {
    if (index < limit) {
      return (
        <div key={index}>
          {/* Your mapping logic here */}
          <p>{item.id}</p>
        </div>
      );
    } else {
      return null; // Or return an empty fragment <> </>
    }
  });

  return (
    <div>
      {/* Render the limited mapped data */}
      {limitedMappedData}
    </div>
  );
};

export default Demo;
