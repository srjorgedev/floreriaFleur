import Svg, { Path } from "react-native-svg"

export default function InicioIcono(color) {
    return (
        <Svg
            width={24}
            fill= {color}
            height={24}
            viewBox="0 0 52 52"
        >
            <Path d="M49 27h-5v22c0 .6-.4 1-1 1H33c-.6 0-1-.4-1-1V32H20v17c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V27H3c-.4 0-.8-.2-.9-.6-.2-.4-.1-.8.2-1.1l23-23c.4-.4 1.1-.4 1.4 0l23 23c.3.3.3.7.2 1.1s-.5.6-.9.6" />
        </Svg>
    )
}