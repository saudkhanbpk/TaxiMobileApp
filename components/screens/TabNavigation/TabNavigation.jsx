import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../HomeScreen/Home';
import Report from '../ReportScreen/Report';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigation=()=> {
  return (
    <Tab.Navigator
    
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: 'blue',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: '#D3D3D3',height:60,},
    }}
    >

<Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />

<Tab.Screen
        name="report"
        component={Report}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={35} />
          ),
        }}
      />


    
    </Tab.Navigator>
  );
}
export default TabNavigation;