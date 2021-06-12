
import React from 'react';
import LeftContentBlock from "./LeftContentBlock";
// import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types";

function ContentBlock(props: ContentBlockProps) {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  // if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
}

export default ContentBlock;
