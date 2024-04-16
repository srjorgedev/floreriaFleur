import Layout from "../layout/Layout"
import { View, Text, StyleSheet, Pressable, TextInput, Alert, } from "react-native"
import { useState } from "react"
import { Rojo } from "../estilos/PaletaColores"

export default function PantallaPago({ navigation }) {
    const [cad, setCad] = useState()
    const [entrega, setEntrega] = useState()

    return (
        <Layout Titulo="Pago">
            <View style={{ flex: 1, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <View style={estilos.container}>
                    <View style={{ flex: 1 }}>
                        <View style={estilos.header}>
                            <Text style={{ ...estilos.title }}>Fleur</Text>
                            <Pressable onPress={() => navigation.goBack()}>
                                <View style={estilos.cerrar}>
                                    <Text style={{ ...estilos.text, fontSize: 20 }}>X</Text>
                                </View>
                            </Pressable>
                        </View>
                        <Text style={{ ...estilos.text, fontSize: 23, }}>Datos de pago</Text>

                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-beetwen', flex: 1 }}>
                            <View style={{}}>
                                <Text style={{ ...estilos.label }}>Ingrese su tarjeta</Text>
                                <TextInput
                                    placeholder="xxxx-xxxx-xxxx-xxxx"
                                    placeholderTextColor="#999999"
                                    style={{ color: "#111111", ...estilos.input }}
                                    inputMode="numeric"
                                    maxLength={16} />

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 4, }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>Caducidad</Text>
                                        <TextInput
                                            placeholder="Fecha - pendiente"
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }}
                                            inputMode="none"
                                            maxLength={4} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>CVV</Text>
                                        <TextInput
                                            placeholder="000"
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }}
                                            inputMode="numeric"
                                            maxLength={4} />
                                    </View>
                                </View>

                                <Text style={{ ...estilos.label }}>Direccion de cuenta</Text>
                                <TextInput
                                    placeholder="Calle, numero interior"
                                    placeholderTextColor="#999999"
                                    style={{ color: "#111111", ...estilos.input }}
                                    inputMode="text" />
                            </View>

                            <Text style={{ ...estilos.text, fontSize: 23, marginTop: 10 }}>Datos personales</Text>

                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>Calle #</Text>
                                        <TextInput
                                            placeholder="00000"
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }}
                                            inputMode="numeric"
                                            maxLength={10} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>Codigo postal</Text>
                                        <TextInput
                                            placeholder="00000"
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }}
                                            inputMode="numeric"
                                            maxLength={6} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>Estado</Text>
                                        <TextInput
                                            placeholder="..."
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }}
                                        />
                                    </View>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>Ciudad</Text>
                                        <TextInput
                                            placeholder="..."
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>Distrito</Text>
                                        <TextInput
                                            placeholder="..."
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }} />
                                    </View>
                                </View>

                                <Text style={{ ...estilos.label }}>Referencias</Text>
                                <TextInput
                                    placeholder="..."
                                    placeholderTextColor="#999999"
                                    style={{ color: "#111111", ...estilos.input }} />

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>Nombre y apellido</Text>
                                        <TextInput
                                            placeholder="..."
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...estilos.label }}>Numero de telefono</Text>
                                        <TextInput
                                            placeholder="000-000-0000"
                                            placeholderTextColor="#999999"
                                            style={{ color: "#111111", ...estilos.input }}
                                            inputMode="numeric"
                                            maxLength={12} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, position: 'absolute', bottom: 25, left: 25 }}>
                        <Text style={{ ...estilos.label }}>Fecha de entrega</Text>
                        <TextInput
                            placeholder="Fecha - pendiente"
                            placeholderTextColor="#999999"
                            style={{ color: "#111111", ...estilos.input, width: 110, height: 40 }} />
                    </View>

                    <Pressable onPress={() => Alert.alert('Mensaje', 'Comprado')}>
                        <View style={estilos.boton}>
                            <Text style={{ color: "#f1f1f1", fontSize: 22 }}>
                                Pagar
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </Layout >
    )
}

const estilos = StyleSheet.create({
    container: {
        width: "85%",
        height: "90%",
        borderRadius: 20,
        padding: 25,
        borderWidth: 1,
        borderColor: "#ebebeb",
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 30,
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
    input: {
        borderWidth: 1,
        borderColor: "#c1c1c1",
        paddingHorizontal: 10,
        fontSize: 12,
        height: 34,
        borderRadius: 8,
    },
    label: {
        fontSize: 16,
        color: "#111111",
        marginVertical: 2
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