import { TouchableOpacity, View, Text, StyleSheet } from "react-native"

export default function Boton({ Texto, Fondo = "#c1c1c1", Funcion }) {
    return (
        <TouchableOpacity onPress={Funcion}>
            <View style={{ backgroundColor: Fondo, ...estilos.boton }}>
                <Text style = {{fontSize: 25, color: "#444444"}}>{Texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    boton: {
        aspectRatio: 2,
        color: "#333333",
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180
    }
})