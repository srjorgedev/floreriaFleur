import { SafeAreaView } from 'react-native-safe-area-context'
import MenuPestañas from './src/navegacion/Menu'

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MenuPestañas />
    </SafeAreaView>
  )
}
