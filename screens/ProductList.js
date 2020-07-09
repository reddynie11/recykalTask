import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ListTile from '../components/ListTile';

const ProductList = () => {
    const products = useSelector(state => state.products.Products );
    return (
        <FlatList 
            data={products}
            renderItem={(item)=> <ListTile item={item.item} /> }
        />
    );
}

export default ProductList;
