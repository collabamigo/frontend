
import React from 'react';
import LeftContentBlock from "./LeftContentBlock";
// import RightContentBlock from "./RightContentBlock";

function ContentBlock(props) {
  // eslint-disable-next-line react/prop-types
  if (props.type === "left") return <LeftContentBlock {...props} />;
  // if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
}

export default ContentBlock;
