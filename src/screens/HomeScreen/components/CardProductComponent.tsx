import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Products } from '../HomeScreen'
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';
import { ModalProductComponent } from './ModalProductComponent';

interface Props{
  item:Products;
}

export const CardProductComponent = ({item}:Props) => {

  //hook use state para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState<boolean>(false);
  //funcion para mostrar el modal
  const handleShowModal = ():void => {
    setShowModal(!showModal);
  }
  return (
    <>
    <View style={stylesGlobal.containerCard}>
      <Image source={{uri:item.pathImage}} style={stylesGlobal.imageCard}/>
      <View>
        <Text style={stylesGlobal.titleCard}>{item.name}</Text>
        <Text>Precio: ${item.price.toFixed(2)}</Text>
      </View>
      <View>
        <Icon name="add-shopping-cart" size={30} color={TERTIARY_COLOR} style={stylesGlobal.iconCard} onPress={handleShowModal}/>
      </View>   
    </View>
    <ModalProductComponent isVisible={showModal} item={item} handleShowModal={handleShowModal}/>

    </>
  )
}
