import { TextInput, Text, StyleSheet, View } from "react-native"

export default function Input({ Label, Type = 'text', Placeholder, Max = null }) {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ ...estilos.label }}>{Label}</Text>
            <TextInput
                placeholder={Placeholder}
                placeholderTextColor="#999999"
                style={{ color: "#111111", ...estilos.input }}
                inputMode={Type}
                maxLength={Max} />
        </View>
    )
}

const estilos = StyleSheet.create({
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
})