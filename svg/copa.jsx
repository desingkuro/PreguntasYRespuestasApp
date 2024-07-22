import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../context/colors/Colors"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgCopa(props) {
  return (
    <Svg
      id="Layer_1"
      viewBox="0 0 120 120"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={'yellow'}
      height={160}
      width={160}
    >
      <Path
        className="st0"
        fill={'yellow'}
        d="M74.5 101.6h-5.3v-2c0-.8-.6-1.4-1.4-1.4H65l-1-7.3h2.2c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4h-2.6l-.3-2h-6.9l-.3 2h-2.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4h2.2l-1 7.3h-2.8c-.8 0-1.4.6-1.4 1.4v2h-5.3c-2 0-3.6 1.6-3.6 3.6v4.5H78v-4.5c.1-2-1.5-3.6-3.5-3.6zM75.7 30.1v6h25V51c-1.4 2.6-8.5 14-29 11.5l-.7 6c2.3.3 4.5.4 6.6.4 22 0 28.7-15.3 29-16l.2-.6V30.1H75.7zM48.9 68.4l-.7-6c-20.5 2.6-27.7-8.9-29-11.5V36.1h25v-6h-31v22.2l.2.6c.3.7 7 16 29 16 2-.1 4.2-.2 6.5-.5z"
      />
      <Path
        className="st1"
        fill={Colors.amarillo}
        d="M81.3 30.1L81.3 93.1 88.4 87.1 95.5 93.1 95.5 30.1z"
      />
      <Path
        className="st1"
        fill={Colors.amarillo}
        d="M24.4 93.1L31.5 87.1 38.6 93.1 38.6 30.1 24.4 30.1z"
      />
      <Path
        fill={'yellow'}
        className="st0"
        d="M60 89.3c-16.4 0-29.7-13.3-29.7-29.7v-40h59.3v40C89.6 76 76.3 89.3 60 89.3z"
      />
      <Path
        d="M60.6 36.5l3.8 7.6c.1.2.3.4.6.4l8.4 1.2c.6.1.8.8.4 1.3l-6.1 5.9c-.2.2-.3.4-.2.7l1.4 8.4c.1.6-.5 1.1-1.1.8l-7.5-4c-.2-.1-.5-.1-.7 0l-7.5 4c-.5.3-1.2-.2-1.1-.8l1.4-8.4c0-.2 0-.5-.2-.7L46.1 47c-.4-.4-.2-1.2.4-1.3l8.4-1.2c.2 0 .4-.2.6-.4l3.8-7.6c.3-.6 1-.6 1.3 0z"
        fill="#edb248"
      />
    </Svg>
  )
}

export default SvgCopa
