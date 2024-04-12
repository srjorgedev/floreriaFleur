import { Svg, Path } from 'react-native-svg'

export default function FlorIcono(color = "#222222", tamaño) {
    return (
        <Svg
            width={tamaño ? tamaño : 24}
            height={tamaño ? tamaño : 24}
            viewBox="0 0 16 16"
            fill="none"
        >
            <Path
                clipRule="evenodd"
                d="M6 2a2 2 0 1 1 4 0v.036l.031-.018a2 2 0 1 1 2 3.464L12 5.5l.031.018a2 2 0 0 1-2 3.464L10 8.964V9a2 2 0 1 1-4 0v-.036l-.031.018a2 2 0 0 1-2-3.464L4 5.5l-.031-.018a2 2 0 0 1 2-3.464L6 2.036zm4 3.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
                fill = {color}
                fillRule="evenodd"
            />
            <Path
                d="M7 16H6a5 5 0 0 1-5-5v-1h1a5 5 0 0 1 5 5zm3 0H9v-1a5 5 0 0 1 5-5h1v1a5 5 0 0 1-5 5"
                fill = {color}
            />
        </Svg>
    )
}