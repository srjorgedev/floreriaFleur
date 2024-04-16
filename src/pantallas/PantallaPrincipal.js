import { View, StyleSheet } from "react-native"
import Layout from "../layout/Layout"
import { DatosFloresInicio } from "../data/Flores"
import FlorCard from "../components/FlorCard"

export default function PantallaPrincipal({ navigation }) {
    return (
        <Layout>
            <View style={estilos.flores}>
                {DatosFloresInicio.map(({ Flor }) => {
                    return (
                        <FlorCard
                            Imagen={Flor.Imagen}
                            Cantidad={Flor.CantidadDeFLores}
                            key={Flor.Id} Funcion={() => navigation.navigate('FlorPila', { data: Flor})} />
                    )
                })}
            </View>
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
        marginVertical: 40,
        flex: 1,
    }
})
