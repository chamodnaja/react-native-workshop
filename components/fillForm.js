import React,{ useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default function FillForm(){
    const [number,setNumber] = useState('1')

    return(
        <>
            <View>
                <Text>{number}</Text>
                <TextInput
                    value={number}
                    onChangeText={setNumber}
                    style={styles.inputStyle}
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    inputStyle:{
        borderColor: '#999',
        borderWidth: 2,
        width: 200,
        borderRadius: 16,
        padding: 6
    }
})