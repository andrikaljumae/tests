import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const OnlineCount = ({children}) => {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(()=>{
    setAnimate(true);
    setTimeout(()=>{
      setAnimate(false);
    }, 500);
  }, [children]);

  return (
    <div className={cx('onlineStatus',{animate})}>
      Hetkel online <span>{children}</span>
    </div>
  );
};

OnlineCount.propTypes = {
  children: PropTypes.number.isRequired,
};

export default OnlineCount;
