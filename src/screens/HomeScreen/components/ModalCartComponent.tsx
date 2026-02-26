import React from 'react'
import { _View, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Cart } from '../HomeScreen';
import { FlatList } from 'react-native-gesture-handler';
import { stylesGlobal } from '../../../theme/appTheme';
import { TERTIARY_COLOR } from '../../../commons/constants';
import Icon from '@expo/vector-icons/MaterialIcons';


interface Props {
    //aqui van las propiedades que se le pasaran al modal
    isVisible: boolean;
    cart: Cart[];
    hiddenModal: () => void; //Cerrar el modal
}

export const ModalCartComponent = ({ isVisible, cart, hiddenModal }: Props) => {
    const { width } = useWindowDimensions();

    //funcion para calcular el total a pagar
    const totalToPay = (): number => {
        let total = 0;
        cart.forEach(item => { total += item.total });
        return total;
    }

    //funcion para comprar los productos del carrito de compras
    const handleBuyProducts = (): void => {
        //aqui iria la logica para comprar los productos, como por ejemplo una peticion a un servidor
        alert('Compra realizada con exito');

        hiddenModal();
        
    }
    return (
        <Modal visible={isVisible} animationType='slide' transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{
                    ...stylesGlobal.bodyModal,
                    width: width * 0.80
                }}>
                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>Mis Productos</Text>
                        <View style={stylesGlobal.iconCard}>
                            <Icon name="cancel"
                                size={20}
                                color={TERTIARY_COLOR}
                                onPress={hiddenModal} />
                        </View>
                    </View>
                    <View style={stylesGlobal.headerTable}>
                        <Text style={stylesGlobal.headerTextTable}>Producto</Text>
                        <View style={stylesGlobal.headerDescriptionTable}>
                            <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 10 }}>Pre.</Text>
                            <Text style={{ ...stylesGlobal.headerTextTable, marginHorizontal: 18 }}>Cant.</Text>
                            <Text style={stylesGlobal.headerTextTable}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <View style={stylesGlobal.headerTable}>
                                <Text style={stylesGlobal.textWidhTable}>{item.name}</Text>
                                <View style={stylesGlobal.headerDescriptionTable}>
                                    <Text style={{ marginHorizontal: 5 }}>${item.price}</Text>
                                    <Text style={{ marginHorizontal: 25 }}>{item.quantity}</Text>
                                    <Text style={{ marginHorizontal: 4 }}>${item.total}</Text>
                                </View></View>} />
                    <View style={stylesGlobal.containerTotalPay}>
                        <Text style={stylesGlobal.textTotalPay}>Total a pagar: ${totalToPay().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={stylesGlobal.button} onPress={handleBuyProducts}>
                        <Text style={stylesGlobal.buttonText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
