import React, { useState }  from 'react'
import { Text, View, StyleSheet, Image, Button, FlatList, ScrollView } from 'react-native'

export default function Education({classLevel, address}){
    const [count,setCount] = useState(1)
    const [animal,setAnimal] = useState(['Dog','Cat','Bird'])

    const increaseNumber = () =>{
        let newValue = count + 1
        setCount(newValue)
    }
    const decreaseNumber = () =>{
        let newValue = count - 1
        setCount(newValue)
    }
    const renderItem = ({item})=>{
        return <Text>{item}</Text>
    }
    return(
        <>
            <ScrollView>
                <Text>{classLevel}</Text>
                <Text>{address}</Text>
                <Text style={styles.fontDesc}>ปีการศึกษา 2555 จบจากโรงเรียนสำโรงทาบวิทยาคม</Text>
                <Text style={styles.fontDesc}>ปีการศึกษา 2561 จบจากมหาวิทยาลัยมหาสารคาม</Text>
                <Text style={styles.fontDesc}>{count}</Text>
                <Button title='เพิ่มค่า' onPress={()=>increaseNumber()}/>
                <Button title='ลดค่า' onPress={()=>decreaseNumber()}/>
                {
                    <FlatList 
                        data={animal} 
                        renderItem={renderItem}
                        keyExtractor={item => item}
                    />
                }
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    fontDesc:{
        color: 'green', 
        fontSize: 22
    }
})