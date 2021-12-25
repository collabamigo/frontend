
import {truncate as _truncate} from "lodash/string"

export function truncate(str, maxLength) {
  return _truncate(str, {length:maxLength-3});
}
