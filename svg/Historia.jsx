import * as React from "react"
import Svg, { Path, G } from "react-native-svg"

function SvgHistoria(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 40 40">
      <Path
        fill="#3F95D4"
        d="M6 4h4a1 1 0 011 1.002V25a1 1 0 01-1 1H6a1 1 0 01-1-1V5.001A1 1 0 016 4z"
      />
      <Path
        fill="#367FB4"
        d="M7 25V5.001A1 1 0 018 4H6a1 1 0 00-1 1.001V25a1 1 0 001 1h2a1 1 0 01-1-1z"
      />
      <Path fill="#D99666" d="M0 26h32v6H0v-6z" />
      <Path fill="#F7CB8B" d="M5 19h6v4.002H5V19z" />
      <Path
        fill="#349886"
        d="M12 0h6a1 1 0 011 1.002V25a1 1 0 01-1 1h-6a1 1 0 01-1-1V1.001A1 1 0 0112 0z"
      />
      <Path fill="#9ACCC3" d="M14 22.001h2V8h-2v14.001zM14 4v2h2V4h-2z" />
      <Path
        fill="#E2574C"
        d="M20 6h6a1 1 0 011 1v18a1 1 0 01-1 1h-6a1 1 0 01-1-1V7a1 1 0 011-1z"
      />
      <Path fill="#D2AD77" d="M5 19H7V23.002H5z" />
      <Path
        fill="#2C8172"
        d="M13 25V1.001A1 1 0 0114 0h-2a1 1 0 00-1 1.001V25a1 1 0 001 1h2a1 1 0 01-1-1z"
      />
      <Path
        fill="#C04A40"
        d="M21 25V7a1 1 0 011-1h-2a1 1 0 00-1 1v18a1 1 0 001 1h2a1 1 0 01-1-1z"
      />
      <Path fill="#F7CB8B" d="M19 16h8v-4h-8v4zm0-6v1.002h8V10h-8z" />
      <G fill="#D2AD77">
        <Path d="M19 10H21V11.002H19z" />
        <Path d="M19 12H21V16H19z" />
      </G>
    </Svg>
  )
}

export default SvgHistoria
