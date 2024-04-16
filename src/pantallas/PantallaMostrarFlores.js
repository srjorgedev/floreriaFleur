import { StyleSheet, ScrollView, Pressable, Text } from "react-native"
import Layout from "../layout/Layout"
import FlorCard from "../components/FlorCard"

export default function PantallaMostrarFlores({ navigation, route }) {
    const { data } = route.params
    return (
        <Layout>
            <Pressable onPress={() => navigation.goBack()}><Text style={estilos.volver}>Volver</Text></Pressable>
            <ScrollView style={estilos.container} contentContainerStyle={estilos.flores}>
                {data.map((Flor) => {
                    return (
                        <FlorCard
                            Imagen={Flor.Imagen}
                            Cantidad={Flor.CantidadDeFLores}
                            key={Flor.Id} Funcion={() => navigation.navigate('Flor', { data: Flor })} />
                    )
                })
                }
            </ScrollView>
        </Layout>
    )
}

const estilos = StyleSheet.create({
    flores: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
    volver: {
        color: "#a1a1a1",
        fontSize: 24,
        marginHorizontal: 13,
        paddingVertical: 4,
        borderRadius: 10,
        width: 80,
        textAlign: 'center',
        marginTop: 6,
        borderWidth: 1,
        borderColor: "#ebebeb"
    }
})
