import React from 'react';
import { View, Text, StyleSheet, Card, Button, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

const CartScreen = (props) => {

    const cartAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const cartItems = [];
        for (const key in state.cart.items) {
            cartItems.push({
                id: key,
                title: state.cart.items[key].title,
                price: state.cart.items[key].price,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });
        }
        return cartItems;
    });
    
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={{fontSize: 20}}>Cart Value: {cartAmount}</Text>
                <Button 
                    title='Checkout'
                    disabled={cartItems.length === 0}
                    onPress={() => props.navigation.navigate('Order')}
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.title}
                        amount={itemData.item.sum}
                        deletable
                        onRemove={() => {
                            //dispatch(cartActions.removeFromCart(itemData.item.productId));
                        }}
                    />
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        fontSize: 22
    },
    summaryText: {
        //fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        //color: Colors.primary
    }
});
export default CartScreen;