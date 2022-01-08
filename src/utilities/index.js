
import {truncate as _truncate} from "lodash/string"

export function truncate(str, maxLength) {
  return _truncate(str, {length:maxLength-3});
}

export function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }

  return true;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
