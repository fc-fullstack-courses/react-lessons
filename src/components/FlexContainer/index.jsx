import React from 'react';

const FlexContainer = (props) => {
  const {
    children,
    justContent = 'flex-start',
    alignItems = 'stretch',
  } = props;

  const styles = {
    display: 'flex',
    justifyContent: justContent,
    alignItems,
    width: '1000px',
    height: '1000px',
  };

  return <div style={styles}>{children}</div>;
};

export default FlexContainer;
