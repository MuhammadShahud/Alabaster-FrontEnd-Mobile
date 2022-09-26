import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import AddButton from '../../assets/AddButton.png'
import Input from '../../components/TextInput'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SubmitButton from '../../components/SubmitButton'

const AddCheckList = () => {

  const navigation = useNavigation();
  const [CheckListName, setCheckListName] = useState('')
  const [CleanerName, setCleanerName] = useState('')
  const [LocationName, setLocationName] = useState('')
  const [Description, setDescription] = useState('')
  const [AddItem, setAddItem] = useState('')
  const [AddedItem, setAddedItem] = useState([])
  const [RefreshList, setRefreshList] = useState(false)


  const onPressAddItem = () => {

    if(AddItem == ''){

      ToastAndroid.showWithGravityAndOffset(
        "Type item first",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );

    }
    else{

      AddedItem.push({id: AddedItem.length, val: AddItem})
      setAddItem('')
      setRefreshList(!RefreshList)

    }

  }

  const onPressRemoveItem = (index) => {
    AddedItem.splice(index, 1)
    setRefreshList(!RefreshList)    
  }


  const renderItem = (item) => {
    // console.log('---', item?.index);
    return(
      <View style={style.ItemList_Style}>

      <Text style={{color: Colors.BLACK, fontWeight: 'bold'}}>{item?.item?.val}</Text>

      <TouchableOpacity
      onPress={()=>onPressRemoveItem(item?.index)}
      >
      <MaterialIcons name='delete' color={Colors.BLACK} size={25}/>
      </TouchableOpacity>

      </View>
    )
  }

  return (
    <View style={style.Main_Container}>

      <Header
        title={'Checklist'}
        headerRight={true}
        headerLeft={true}
      />

      <ScrollView>

        <Text style={style.TextInputHeader}>Checklist Name</Text>
        <Input
          value={CheckListName}
          placeholder={'Checklist Name'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setCheckListName(text)}
        />

        <Text style={style.TextInputHeader}>Cleaner Name</Text>
        <Input
          value={CleanerName}
          placeholder={'Cleaner Name'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setCleanerName(text)}
        />

        <Text style={style.TextInputHeader}>Location Name</Text>
        <Input
          value={LocationName}
          placeholder={'Location Name'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setLocationName(text)}
        />

        <Text style={style.TextInputHeader}>Description</Text>
        <Input
          value={Description}
          placeholder={'Description'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setDescription(text)}
          multiLine={true}
        />
        
        <Text style={style.TextInputHeader}>Add Items</Text>

        <FlatList
          data={AddedItem}
          keyExtractor={id=>id?.id}
          renderItem={renderItem}
        />

        <View style={{flexDirection: 'row', width:'98%', alignItems: 'flex-end', alignSelf: 'center' }}>
          <View style={{width:'80%'}}>
            <Input
              value={AddItem}
              placeholder={'Add item'}
              placeholderTextColor={Colors.GRAY}
              onChangeText={text => setAddItem(text)}
            />
          </View>

          <View style={{width:'20%'}}>
            <TouchableOpacity
            onPress={()=>onPressAddItem()}
            >
              <Image
                source={AddButton}
                style={{ height: 60, width: 60, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </View>

        </View>

        <SubmitButton
            text={'Add Checklist'}
            onPress={()=>console.log('Add Item')}  
        />

      </ScrollView>


    </View>
  )

}


const style = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  TextInputHeader: {
    color: Colors.BLACK,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 10
  },
  ItemList_Style: {
    backgroundColor: Colors.WHITE, 
    width: '90%', 
    alignSelf: 'center', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    borderWidth: 1, 
    borderColor: Colors.LIGHT_GRAY_1, 
    padding: 10,
    marginBottom: 7, 
    borderRadius: 10
  }
})

export default AddCheckList;