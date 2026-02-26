import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Products } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';


interface Props {
    //aqui van las propiedades que se le pasaran al modal
    isVisible: boolean;
    item: Products;
    handleShowModal: () => void; //oculta el modal
    changeStockProduct: (id: number, stock: number) => void; //funcion actualiza el modal

}

export const ModalProductComponent = ({ isVisible, item, handleShowModal, changeStockProduct }: Props) => {
    const { width } = useWindowDimensions();
    const [contador, setContador] = useState<number>(1);

    //funcion agregar al carrito
    const handleAddToCart = () => {
        //lamar la funcion para actualizar el stock del producto, restando el contador al stock actual
        changeStockProduct(item.id, contador);
        handleShowModal();
        //reiniciar la cantiad
        setContador(1);
    }

    return (
        <Modal visible={isVisible} animationType='slide' transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{
                    ...stylesGlobal.bodyModal,
                    width: width * 0.80
                }}>
                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>{item.name} - ${item.price.toFixed(2)}</Text>
                        <View style={stylesGlobal.iconCard}>
                            <Icon name="cancel"
                                size={20}
                                color={TERTIARY_COLOR}
                                onPress={handleShowModal} />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={{ uri: item.pathImage }}
                            style={stylesGlobal.imageModal} />
                    </View>
                    {
                        (item.stock == 0)
                            ? <Text style={stylesGlobal.textStock}>Producto agotado</Text>
                            :
                            <>
                                <View style={stylesGlobal.containerbutonModal}>
                                    <TouchableOpacity style={stylesGlobal.butonModal} onPress={() => setContador(contador - 1)} disabled={contador == 1}>
                                        <Text style={stylesGlobal.butoTextModal}>-</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Text style={{ fontSize: 18 }}>{contador}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={stylesGlobal.butonModal} onPress={() => setContador(contador + 1)} disabled={contador == item.stock}>
                                        <Text style={stylesGlobal.butoTextModal}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={stylesGlobal.priceModal}>
                                        Total: ${(item.price * contador).toFixed(2)}
                                    </Text>
                                </View>
                                <TouchableOpacity style={stylesGlobal.button} onPress={handleAddToCart}>
                                    <Text style={stylesGlobal.buttonText}>Agregar al carrito</Text>
                                </TouchableOpacity>
                            </>
                    }
                </View>
            </View>
        </Modal>
    )
}
