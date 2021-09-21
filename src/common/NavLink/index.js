
import React from "react";
import Link from "common/Link";

export default function NavLink(props) {
  return (
      <Link
          {...props}
          getProps={({isCurrent}) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                style: {
                    color: isCurrent ? "red" : "blue"
                }
            };
        }}
      />)
}
