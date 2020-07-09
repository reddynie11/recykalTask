import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';


const reviewSchema = yup.object({
    name: yup.string()
      .required('Please enter your name'),
    email: yup.string()
      .required('email is required')
      .email('please enter a valid email'),
    phone: yup.number()
      .required('phone number is required')
      .min(10, 'please enter a valid number'),
  });

const OrderForm = () => {
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

    submitHandler = (form, cart) => {
        const order = {
            name: form.name,
            email: form.email,
            moblie: form.phone,
            orders: cart
        }
        
        console.log('order', order)
    }
  return (
    
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values) => {
            submitHandler(values,cartItems);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text style={styles.errorText}>{props.touched.name && props.errors.name}</Text>

            <TextInput
              style={styles.input}
              multiline
              placeholder='Email Address'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>

            <TextInput 
              style={styles.input}
              placeholder='Mobile Number'
              onChangeText={props.handleChange('phone')}
              value={props.values.phone}
              keyboardType='numeric'
            />
            <Text style={styles.errorText}>{props.touched.phone && props.errors.phone}</Text>
            
            <Button title="Order Now" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical:20
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
      },
      errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
      },
})

export default OrderForm;