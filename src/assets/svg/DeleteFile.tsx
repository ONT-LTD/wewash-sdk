import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#525866"
      d="M13.75 5.5h3.75V7H16v9.75a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75V7H2.5V5.5h3.75V3.25A.75.75 0 0 1 7 2.5h6a.75.75 0 0 1 .75.75V5.5ZM14.5 7h-9v9h9V7ZM7.75 9.25h1.5v4.5h-1.5v-4.5Zm3 0h1.5v4.5h-1.5v-4.5ZM7.75 4v1.5h4.5V4h-4.5Z"
    />
  </Svg>
);
export default SvgComponent;
