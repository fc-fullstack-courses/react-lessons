import React from 'react';
import cx from 'classnames';
import styles from './FlexContainer.module.scss';

const FlexContainer = (props) => {
  const {
    children,
    justContent = 'flex-start',
    alignItems = 'stretch',
  } = props;

  // const classes = `container jc-${justContent} ai-${alignItems}`;

  const isJCCenter = justContent === 'center';

  const classes = cx(styles.container, {
    [styles.jcCenter]: isJCCenter,
    [styles.jcFlexStart]: justContent === 'flex-start',
    [styles.aiCenter]: alignItems === 'center',
  });

  return <div className={classes}>{children}</div>;
};

export default FlexContainer;
