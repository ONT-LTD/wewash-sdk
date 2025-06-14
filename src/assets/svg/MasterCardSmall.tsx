import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={12}
    fill="none"
    {...props}
  >
    <Path fill="#FF5F00" d="M11.502 1.677H6.686v8.643h4.816V1.677Z" />
    <Path
      fill="#EB001B"
      d="M6.992 5.999c0-1.68.78-3.283 2.095-4.322a5.49 5.49 0 0 0-7.721.932 5.474 5.474 0 0 0 .932 7.711 5.495 5.495 0 0 0 6.804 0A5.497 5.497 0 0 1 6.992 6Z"
    />
    <Path
      fill="#F79E1B"
      d="M18 5.999a5.497 5.497 0 0 1-5.504 5.497 5.452 5.452 0 0 1-3.394-1.176 5.502 5.502 0 0 0 .917-7.727 5.782 5.782 0 0 0-.917-.916c2.385-1.878 5.855-1.466 7.72.932A5.437 5.437 0 0 1 18 5.999ZM17.48 9.404v-.183h.077v-.03h-.184v.03h.077v.183h.03Zm.352 0V9.19h-.061l-.061.153-.062-.153h-.06v.214h.045v-.168l.061.138h.046l.061-.138v.168h.031Z"
    />
  </Svg>
);
export default SvgComponent;
