import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#38C793"
      d="M6 12.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm-.598-3.6 4.242-4.243-.849-.848-3.393 3.394-1.698-1.697-.848.848L5.402 8.9Z"
    />
  </Svg>
);
export default SvgComponent;
