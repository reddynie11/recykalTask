import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { addToCart } from '../redux/actions/cartActions';

const ListTile = (props) => {
    const dispatch = useDispatch();
    return(
        <View style={styles.cont}>
            <Text style={styles.title}>{props.item.title}</Text>
            <View style={styles.scont}>
                <Text> Price: INR {props.item.price}</Text>
                <Button 
                    title='add to cart' 
                    onPress={() => dispatch(addToCart(props.item)) }
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cont:{
        paddingVertical: 10,
        paddingHorizontal:20,
        margin: 10,
        borderColor: 'black',
        borderWidth: 0.5
    },
    title:{
        fontSize: 24,

    },
    scont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    }
});
export default ListTile;