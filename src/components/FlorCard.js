import { View, Image, Text, StyleSheet, Pressable } from "react-native"

export default function FlorCard({ Imagen, Cantidad, Funcion }) {
    return (
        <Pressable onPress={Funcion}>
            <View style={estilos.card}>
                <Image source={{ uri: Imagen }} style={estilos.imagen} />
                <Text style={{ fontSize: 18, color: "#333333", paddingBottom: 5 }}>{Cantidad}</Text>
            </View>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
    card: {
        width: 120,
        aspectRatio: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ebebeb',
        backgroundColor: "#fff",
        marginTop: 6
    },
    imagen: {
        width: '100%',
        aspectRatio: 1,
        flex: 1,
        objectFit: "contain",
        marginTop: 5
    }
})