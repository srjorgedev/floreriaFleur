import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PantallaPrincipal from '../pantallas/PantallaPrincipal'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import InicioIcono from '../iconos/Inicio'
import FlorIcono from '../iconos/Flor'
import PantallaFlores from '../pantallas/PantallaFlores'
import { Rojo } from '../estilos/PaletaColores'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PantallaFlor from '../pantallas/PantallaFlor'

const Pestaña = createBottomTabNavigator()
const Pila = createNativeStackNavigator()

function MenuPila() {
    return (
        <Pila.Navigator screenOptions={{
            headerShown: false
        }}>
            <Pila.Screen name="Flor" component={PantallaFlor} />
        </Pila.Navigator>
    );
}

export default function MenuPestañas() {
    return (
        <NavigationContainer>
            <Pestaña.Navigator initialRouteName='Inicio' screenOptions={{
                tabBarStyle: {
                    height: 75,
                    backgroundColor: "#fafafa"
                },
                headerShown: false,
            }}>
                <Pestaña.Screen component={PantallaPrincipal} name='Inicio' options={{
                    tabBarIcon: ({ focused }) => InicioIcono(focused ? Rojo[500] : "#888888"),
                    tabBarActiveTintColor: Rojo[500],
                    tabBarInactiveTintColor: "#888888",
                    tabBarLabelStyle: estilos.label,
                    tabBarActiveBackgroundColor: Rojo[100],
                    tabBarItemStyle: estilos.boton
                }} />
                <Pestaña.Screen component={PantallaFlores} name='Flores'
                    options={() => ({
                        tabBarIcon: ({ focused }) => FlorIcono(focused ? Rojo[500] : "#888888"),
                        tabBarActiveTintColor: Rojo[500],
                        tabBarInactiveTintColor: "#888888",
                        tabBarLabelStyle: estilos.label,
                        tabBarActiveBackgroundColor: Rojo[100],
                        tabBarItemStyle: estilos.boton
                    })} />
                <Pestaña.Screen component={MenuPila} name='Extra' options={{ tabBarButton: () => null }} />
            </Pestaña.Navigator>
        </NavigationContainer>
    )
}

const estilos = StyleSheet.create({
    label: {
        fontSize: 20
    },
    boton: {
        borderRadius: 20,
        marginVertical: 8,
        marginHorizontal: 60,
        paddingHorizontal: 5,
        paddingVertical: 6
    }
})