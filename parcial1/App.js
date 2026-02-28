import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

// Componente genérico que recibe el título por parámetro de ruta
function ScreenComponent({ route }) {
  return <HomeScreen route={route} />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: 'bold',
          },
          tabBarItemStyle: {
            flex: 1,           // mismo width para cada tab
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: '#888',
          headerShown: true,
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={ScreenComponent}
          initialParams={{ title: 'Inicio' }}
          options={{
            tabBarIcon: () => <Text>🏠</Text>,
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={ScreenComponent}
          initialParams={{ title: 'Buscar' }}
          options={{
            tabBarIcon: () => <Text>🔍</Text>,
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ScreenComponent}
          initialParams={{ title: 'Perfil' }}
          options={{
            tabBarIcon: () => <Text>👤</Text>,
          }}
        />
        <Tab.Screen
          name="Ajustes"
          component={ScreenComponent}
          initialParams={{ title: 'Ajustes' }}
          options={{
            tabBarIcon: () => <Text>⚙️</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

