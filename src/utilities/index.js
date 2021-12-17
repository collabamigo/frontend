
export function truncate(str, maxLength) {
  if (str.length > maxLength) {
	return str.substring(0, maxLength-3) + '...';
  }
  return str;
}
