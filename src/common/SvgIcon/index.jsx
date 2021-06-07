/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */

import React from 'react';
import { SvgIconProps } from "../types";

export function SvgIcon({ className, src, width, height }: SvgIconProps) {
  return (
    <img
      alt={src}
      className={className}
      height={height}
      src={`/img/svg/${src}`}
      width={width}
    />)
}

export default SvgIcon
