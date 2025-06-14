import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#14162C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M.833 8S4.166 1.333 10 1.333C15.833 1.333 19.166 8 19.166 8S15.833 14.667 10 14.667C4.166 14.667.833 8 .833 8Z"
    />
    <Path
      stroke="#14162C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </Svg>
);
export default SvgComponent;
