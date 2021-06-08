
import React from 'react';
import { SvgIconProps } from "../types";

export function SvgIcon({ src, width, height }: SvgIconProps) {
  return (<img
      alt={src}
      height={height}
      src={`/img/svg/${src}`}
      width={width}
          />)
}

export default SvgIcon
