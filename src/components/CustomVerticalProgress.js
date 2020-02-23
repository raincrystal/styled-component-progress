import React from 'react';
import styled from 'styled-components'

const ProgressBar = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border: 1px solid #a09d9d;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Progress = styled.div`
  background: blue;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  width: 100%;
  text-align: center;
  position: absolute;
  font-size: 80%;
  color: white;
  mix-blend-mode: difference;
`;

const hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e", "f"];
const getRandomColor = (index) => {
  let color = `#${hexValues[(index + 14) % 15]}`;
  for ( let i = 0; i < 5; i++ ) {
    const x = Math.round( Math.random() * 14 );
    const y = hexValues[x];
    color += y;
  }
  return color;
};

const gradient = (index) => `linear-gradient(${getRandomColor(index)}, ${getRandomColor(index)})`;

const CustomVerticalProgress = ({progress, className, width, height, index}) => {
  return (
    <div style={{width, height}} className={className}>
      <ProgressBar>
        <Progress style={{height: `${progress}%`, background: gradient(index)}} />
        <Label>
          {progress ? progress : 0}
          <br />
          %
        </Label>
      </ProgressBar>
    </div>
  );
};

CustomVerticalProgress.defaultProps = {
  width: '30px',
  height: '150px',
  progress: 50,
  index: 0,
};

export default CustomVerticalProgress;
