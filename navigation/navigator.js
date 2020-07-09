import { enableScreens } from 'react-native-screens';
import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import ProductList from '../screens/ProductList';
import CartScreen from '../screens/CartScreen';
import OrderScreen from '../screens/OrderScreen';

enableScreens();
const Stack = createNativeStackNavigator();

const Navigator = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#4a148c'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            >
                <Stack.Screen
                    name='Products'
                    component={ProductList}
                    options={(data) => ({
                        headerRight: () => (
                            <Button 
                                onPress={() => data.navigation.navigate('Cart')}
                                color='#2196F3'
                                title='Cart'
                                
                            />
                        )
                    })}
                />
                <Stack.Screen
                    name='Cart'
                    component={CartScreen}
                />
                <Stack.Screen
                    name='Order'
                    component={OrderScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;