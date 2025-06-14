import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#091E42"
      d="M6.953 7.19a.5.5 0 0 1 .656-.046l.051.045 3.418 3.417 3.42-3.419a.5.5 0 0 1 .751.656l-.044.051-3.42 3.42 3.419 3.415a.5.5 0 0 1-.656.753l-.051-.045-3.418-3.417-3.418 3.418a.5.5 0 0 1-.752-.656l.045-.052 3.417-3.417-3.418-3.417a.5.5 0 0 1 0-.707Z"
    />
  </Svg>
);
export default SvgComponent;
