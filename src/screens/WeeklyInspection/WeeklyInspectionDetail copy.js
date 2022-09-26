import { Text, View,Image , ImageBackground, TouchableOpacity,FlatList} from 'react-native'
import React, { Component } from 'react'

export default class WeeklyInspectionDetail extends Component {

   renderCheckList = () => (
       <TouchableOpacity style={{width:'95%',height:90,backgroundColor:'grey',alignSelf:'center',borderRadius:10,marginVertical:10,flexDirection:'row',alignItems:'center'}}>
       <Image source={require('../../assets/Image3.jpg')} style={{width:90,height:80,resizeMode:'cover'}}/>
       <View>
       <Text style={{fontSize:15,color:'white',marginHorizontal:15,alignItems:"center",justifyContent:'center'}} >Birdy</Text>
       <Text style={{fontSize:15,color:'white',marginHorizontal:15,alignItems:"center",justifyContent:'center'}} >Young Heart</Text>
       </View>
       <Text style={{position:'absolute',right:10}}>3:30</Text>
       </TouchableOpacity>
   )

   render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
           <ImageBackground source={require('../../assets/Image3.jpg')} style={{flex:1,width:'100%',resizeMode:'cover'}}>
           <Text style={{fontSize:18,color:'white',marginVertical:20,alignSelf:'center',alignItems:"center",justifyContent:'center'}} >Artist</Text>
           <Text style={{fontSize:30,color:'white',marginHorizontal:20,alignItems:"center",justifyContent:'center',bottom:90,position:'absolute'}} >Birdy</Text>
           <Text style={{fontSize:20,color:'white',marginHorizontal:20,alignItems:"center",justifyContent:'center',bottom:70,position:'absolute'}} >Young Heart</Text>
          <View style={{marginHorizontal:20,alignItems:"center",justifyContent:'center',bottom:25,position:'absolute',flexDirection:'row'}}>
          <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'#fff',borderRadius:12,}}>
               <Text>+  Follow</Text>
           </TouchableOpacity> 
           <TouchableOpacity style={{ marginHorizontal:10}}>
               <Text style={{backgroundColor:'#fff',paddingHorizontal:14,paddingVertical:10,borderRadius:360}}>+</Text>
           </TouchableOpacity> 
          </View>
          
           
           </ImageBackground>
          
        </View>
        <View style={{flex:0.6,backgroundColor:'black'}}>
        <FlatList
     style={{marginTop: 10}}
         data={[1,1,1,1]}
         keyExtractor={id=>id?.id}
         renderItem={()=>this.renderCheckList()}
     />
        </View>
      </View>
    )
  }
}
