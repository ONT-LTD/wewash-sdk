import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#14162C"
      d="M12.5 9.005a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-5.005c4.614 0 8.596 3.15 9.701 7.564a.75.75 0 1 1-1.455.365 8.504 8.504 0 0 0-16.493.004.75.75 0 0 1-1.455-.363A10.003 10.003 0 0 1 12.5 5.5Z"
    />
  </Svg>
);
export default SvgComponent;
