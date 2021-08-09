import React, { useState }  from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'

export default function Education(){
    const [count,setCount] = useState(1)

    const increaseNumber = () =>{
        let newValue = count + 1
        setCount(newValue)
    }
    
    return(
        <>
            <Text style={styles.fontDesc}>ปีการศึกษา 2555 จบจากโรงเรียนสำโรงทาบวิทยาคม</Text>
            <Text style={styles.fontDesc}>ปีการศึกษา 2561 จบจากมหาวิทยาลัยมหาสารคาม</Text>
            <Text style={styles.fontDesc}>{count}</Text>
            <Button title='เพิ่มค่า' onPress={()=>increaseNumber()}/>
        </>
    )
}
const styles = StyleSheet.create({
    fontDesc:{
        color: 'green', 
        fontSize: 22
    }
})