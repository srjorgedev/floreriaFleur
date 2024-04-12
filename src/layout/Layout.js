import { View, Text, StatusBar } from "react-native"

export default function Layout({ children }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
            <StatusBar backgroundColor="#fafafa" />
            <Text style={{ fontSize: 40, marginHorizontal: 15, color: '#555555', paddingVertical: 10 }}>Floreria Fleur</Text>
            <View style={{ height: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#e3e3e3' }} />
            {children}
        </View>
    )
}