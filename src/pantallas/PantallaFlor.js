import { Rojo } from "../estilos/PaletaColores"
import Layout from "../layout/Layout"
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native"

export default function PantallaFlor({ route, navigation }) {
    const { key, origin } = route.params
    const Flor = origin.find(({ Flor }) => Flor.Id === key)

    return (
        <Layout>
            <View style={{ flex: 1, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <View style={estilos.container}>
                    <View>
                        <View style={estilos.header}>
                            <Text style={{ ...estilos.title }}>{Flor.Flor.Nombre}</Text>
                            <Pressable onPress={() => navigation.goBack()}>
                                <View style={estilos.cerrar}>
                                    <Text style={{ ...estilos.text, fontSize: 20 }}>X</Text>
                                </View>
                            </Pressable>
                        </View>
                        <Text style={{ ...estilos.textoDestacado, fontSize: 25, fontWeight: 'bold' }}>${Flor.Flor.Precio}</Text>
                        <Image source={{ uri: Flor.Flor.Imagen }} style={estilos.imagen} />
                        <Text style={{ ...estilos.text, fontSize: 22, marginTop: 10 }}>{Flor.Flor.Descripcion}</Text>
                        <Text style={{ color: '#222222', fontSize: 15, marginTop: 8, fontWeight: 'bold' }}>Todos los pedidos son para enviar a domicilio</Text>
                    </View>
                    <Pressable onPress={() => Alert.alert('Mensaje', 'Comprado')}>
                        <View style={estilos.boton}>
                            <Text style={{ color: "#f1f1f1", fontSize: 22 }}>
                                Comprar
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </Layout>
    )
}

const estilos = StyleSheet.create({
    container: {
        width: "85%",
        height: "85%",
        borderRadius: 20,
        padding: 25,
        borderWidth: 1,
        borderColor: "#ebebeb",
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 35,
        color: "#111111"
    },
    text: {
        color: "#444444"
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cerrar: {
        width: 35,
        aspectRatio: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#c1c1c1"
    },
    imagen: {
        width: '100%',
        aspectRatio: 16 / 12,
        objectFit: 'contain',
        marginVertical: 16
    },
    textoDestacado: {
        color: Rojo[500]
    },
    boton: {
        borderRadius: 10,
        backgroundColor: Rojo[500],
        width: 120,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: Rojo[900]
    }
})