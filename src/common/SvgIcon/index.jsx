
import React from 'react';

// eslint-disable-next-line react/prop-types
export function SvgIcon({ src, width, height,className }) {
  return (<img
      alt={src}
      className={className}
      height={height}
      src={`/img/svg/${src}`}
      width={width}
          />)
}

export default SvgIcon
