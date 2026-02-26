import React, { useState } from 'react'
import { Alert, FlatList, Text, View } from 'react-native'
import { TitleComponents } from '../../components/TitleComponents';
import { BodyComponents } from '../../components/BodyComponents';
import { CardProductComponent } from './components/CardProductComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../../commons/constants';
import { stylesGlobal } from '../../theme/appTheme';
import { ModalCartComponent } from './components/ModalCartComponent';


export interface Products {
    id: number;
    name: string;
    description: string;
    stock: number
    price: number;
    pathImage: string;
}

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {


    //datos de prueba
    const products: Products[] = [
        {
            id: 1,
            name: "Iphone 17 Pro Max",
            description: "Dispositivo móvil de alta gama con pantalla OLED de 6.7 pulgadas, procesador A17 Bionic, cámara trasera triple de 12 MP y batería de larga duración.",
            stock: 0,
            price: 1600,
            pathImage: 'https://www.hablemosdeapple.com/wp-content/uploads/2025/01/iPhone-17-Pro-Dual-Tone-Feature-1.jpg'
        },
        {
            id: 2,
            name: "Samsung Galaxy S25 Ultra",
            description: "Dispositivo móvil de alta gama con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 3, cámara trasera cuádruple de 50 MP y batería de 5000 mAh.",
            stock: 5,
            price: 1300,
            pathImage: 'https://http2.mlstatic.com/D_NQ_NP_652265-MLA107519050879_022026-O.webp'
        },
        {
            id: 3,
            name: "Iphone 15 Pro Max",
            description: "Dispositivo móvil de alta gama con pantalla OLED de 6.7 pulgadas, procesador A17 Bionic, cámara trasera triple de 12 MP y batería de larga duración.",
            stock: 5,
            price: 1100,
            pathImage: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png'
        },
        {
            id: 4,
            name: "Samsung Galaxy S24 Ultra",
            description: "Dispositivo móvil de alta gama con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 3, cámara trasera cuádruple de 50 MP y batería de 5000 mAh.",
            stock: 5,
            price: 1050,
            pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsg5gX-WSvoBnYrUFmXoKyxF3W6R4SUoz5yA&s'
        }
        ,
        {
            id: 5,
            name: "Samsung Galaxy S24 Ultra",
            description: "Dispositivo móvil de alta gama con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 3, cámara trasera cuádruple de 50 MP y batería de 5000 mAh.",
            stock: 5,
            price: 1050,
            pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsg5gX-WSvoBnYrUFmXoKyxF3W6R4SUoz5yA&s'
        },
        {
            id: 6,
            name: "Samsung Galaxy S24 Ultra",
            description: "Dispositivo móvil de alta gama con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 3, cámara trasera cuádruple de 50 MP y batería de 5000 mAh.",
            stock: 5,
            price: 1050,
            pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsg5gX-WSvoBnYrUFmXoKyxF3W6R4SUoz5yA&s'
        }
    ]

    //hook usestate:permite gestionar el estado de los productos
    const [productsState, setProductsState] = useState<Products[]>(products);

    //hook use state para gestionar el estado del carrito de compras, que es un array de productos
    const [cart, setCart] = useState<Cart[]>([]); //arreglo carrito

    //hook use state para controlar la visibilidad del modal del carrito de compras
    const [showModalCart, setShowModalCart] = useState<boolean>(false);

    //Funcion para actualizar el estdo del modal del carrito de compras
    const handleShowModalCart = (): void => {
        if (cart.length === 0) {
            Alert.alert(
                "Carrito",
                "Su carrito está vacío"
            );
            return;
        }
        setShowModalCart(!showModalCart);
    }

    //funcion para controlar la cantidad de productos a comprar
    const changeStockProduct = (id: number, cantidad: number) => {
        const newProducts = productsState.map(item => item.id == id ? { ...item, stock: item.stock - cantidad } : item);
        //modificar el estado de los productos        
        setProductsState(newProducts);
        //llamar la funcion para agregar el producto al carrito, pasando el id del producto y la cantidad a comprar
        addProduct(id, cantidad);
    }

    //funcion para agregar productos al carrito
    const addProduct = (id: number, quantity: number): void => {
        const product = productsState.find(product => product.id == id);

        //sino existe el producto, no se agrega al carrito
        if (!product){
            return;
        } 

        // Verificar si ya existe en el carrito
        const existProduct = cart.find(item => item.id === id);

        if (existProduct) {

            const updatedCart = cart.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + quantity,
                        total: (item.quantity + quantity) * item.price
                    }
                    : item
            );

            setCart(updatedCart);

        } else {
            //crear un nuevo objeto de tipo Cart con los datos del producto y la cantidad a comprar
            const newCart: Cart = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                total: product.price * quantity
            };
            // Agregar el nuevo producto al carrito
            setCart([...cart, newCart]);
        }
    };

    return (
        <View>
            <View style={stylesGlobal.headerHome}>
                <TitleComponents title='Productos' />
                <View style={stylesGlobal.iconHome}>
                    <Text style={stylesGlobal.textIconCart}>{cart.length}</Text>
                    <Icon name="shopping-cart" size={30} color={SECONDARY_COLOR} onPress={handleShowModalCart} />
                </View>
            </View>
            <BodyComponents>
                <FlatList
                    data={productsState}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CardProductComponent item={item} changeStockProduct={changeStockProduct} />}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }} />
            </BodyComponents>
            <ModalCartComponent isVisible={showModalCart} cart={cart} hiddenModal={handleShowModalCart} />
        </View>
    )
}
