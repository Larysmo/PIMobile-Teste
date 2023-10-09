import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Sobre from '../screens/Sobre';

const Tab = createBottomTabNavigator();

export default function NavegacaoAba (){
  return (
  <Tab.Navigator>
    <Tab.Screen name="Home" component ={Home} />
    <Tab.Screen name="Sobre" component ={Sobre} /> 
    <Tab.Screen name="Perfil"/> 
    <Tab.Screen name="Solicitar"/>
  </Tab.Navigator>
  );
}  

