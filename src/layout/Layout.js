import { View, Text, StatusBar } from "react-native"

export default function Layout({ children, Titulo = "Floreria Fleur" }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
            <StatusBar backgroundColor="#fafafa" barStyle={"dark-content"}/>
            <Text style={{ fontSize: 40, marginHorizontal: 15, color: '#555555', paddingVertical: 10 }}>{Titulo}</Text>
            <View style={{ height: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#e3e3e3' }} />
            {children}
        </View>
    )
}