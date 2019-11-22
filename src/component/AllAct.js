import React from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-paper'

export const colorButton = (string, arr) => {
    if(string === arr[0]){
        return 'blue'
    }else if(string.match(/Dislike/) == 'Dislike'){
        return 'red'
    }
    return 'white'
}

export const textColor = (string) => {
    if(string === 'white'){
        return 'gray'
    }else{
        return 'white'
    }
}


function AllAct(props){
        
        const label = ['Like All', 'Reset All', 'Dislike All']
    
        return(
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:10, marginRight:10}}>
                {label.map((val, index) => {
                    return <Button raised theme={{roundness:10}} key={index} 
                            style={{marginHorizontal:3, marginTop: 10, backgroundColor:colorButton(val, label)}} 
                            mode="outlined" color={textColor(colorButton(val, label))}  
                            onPress={()=> {
                                if(val == 'Like All'){
                                    return props.like()
                                }else if(val == 'Reset All'){
                                    return props.reset()
                                }else if(val == 'Dislike All'){
                                    return props.dislike()
                                }
                                return alert('Something Gone Wrong')                                    
                            }} >{val}</Button>
                })}
            </View>
        ) 
    
}

export default AllAct