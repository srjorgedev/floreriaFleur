import { View, Text, StyleSheet } from "react-native"
import Layout from "../layout/Layout"
import Boton from "../components/Boton"
import FlorIcono from "../iconos/Flor"
import { Rojo } from "../estilos/PaletaColores"

export default function PantallaFlores() {
    return (
        <Layout>
            <View style={estilos.headerFlor}>
                {FlorIcono(Rojo[800], 60)}
                <Text style={{ color: Rojo[800], fontSize: 24 }}>Explorar flores</Text>
            </View>

            <View style={estilos.contenedorBotones}>
                <Boton Texto="ROSAS" Fondo="#70f8ff"/>
                <Boton Texto="GIRASOLES" Fondo="#fffd70"/>
                <Boton Texto="PEONIAS" Fondo="#ff70cf"/>
                <Boton Texto="GERBERAS" Fondo="#ffcf70"/>
                <Boton Texto="TULIPANES" Fondo="#ff7088"/>
                <Boton Texto="JAZMINES" Fondo="#d1d1d1"/>
            </View>
        </Layout>
    )
}

const estilos = StyleSheet.create({
    headerFlor: {
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
    },
    contenedorBotones: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
    },
})