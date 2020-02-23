import React from 'react';
import styled from "styled-components";

import CustomVerticalProgress from "./CustomVerticalProgress";

const PanelWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const progresses = [70, 35, 100, 60, 85];

const ProgressPanel = ({className, width, height}) => {
  return (
    <div style={{width, height}} className={className}>
      <PanelWrapper>
        {progresses.map((progress, index) => (
          <CustomVerticalProgress progress={progress} index={index} key={`progress_${index}`}/>
        ))}
      </PanelWrapper>
    </div>
  );
};

ProgressPanel.defaultProps = {
  width: '500px',
  height: '200px',
};
export default ProgressPanel;
