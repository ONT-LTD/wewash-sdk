import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m2.845 7 5.488 5.488a.833.833 0 0 1-1.178 1.179L.488 7 7.155.333a.833.833 0 0 1 1.178 1.179L2.845 7Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
