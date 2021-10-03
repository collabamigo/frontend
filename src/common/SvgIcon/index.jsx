
import React from 'react';

// eslint-disable-next-line react/prop-types
export function SvgIcon({ src, width, height }) {
  return (<img
      alt={src}
      height={height}
      src={`/img/svg/${src}`}
      width={width}
          />)
}

export default SvgIcon
