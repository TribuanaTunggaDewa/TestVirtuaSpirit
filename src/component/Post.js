import React from 'react'
import {View} from 'react-native'
import {Card, Button} from 'react-native-paper'
import {colorButton,textColor} from './AllAct'





function Post(props){

    const label = ['Like', 'Dislike']

    return(
        <Card raised theme={{roundness:10}} style={{margin: 10, marginBottom: 20}}>
            <Card.Cover source={{ uri: props.image }} />
            <Card.Content style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                <Button raised theme={{ roundness:10 }} mode='outlined' color='gray'>{props.like} Like</Button>
                <View style={{flexDirection:'row'}}>  
                {label.map((val, index) => {
                    return(
                    <Button
                        raised
                        theme={{roundness:10}}
                        key={index} 
                        style={{backgroundColor: colorButton(val,label)}} 
                        mode='outlined' color={textColor(colorButton(val, label))} 
                        onPress={()=>{
                            if(val == 'Like'){
                              return props.act()   
                            }
                            return props.actdec()
                        }}>{val}</Button>
                    )   
                }
                )}
                </View>  
            </Card.Content>
        </Card>
    )

}

export default Post
