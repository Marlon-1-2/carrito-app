import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { TitleComponents } from '../../components/TitleComponents';
import { BodyComponents } from '../../components/BodyComponents';
import { CardProductComponent } from './components/CardProductComponent';

interface Products {
    id: number;
    name: string;
    description: string;
    stock: number
    price: number;
    pathImage: string;
}

export const HomeScreen = () => {


    //datos de prueba
    const products: Products[] = [
        {
            id: 1,
            name: "Iphone 17 Pro Max",
            description: "Dispositivo móvil de alta gama con pantalla OLED de 6.7 pulgadas, procesador A17 Bionic, cámara trasera triple de 12 MP y batería de larga duración.",
            stock: 10,
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
    ]
    return (
        <View>
            <TitleComponents title='Productos' />
            <BodyComponents>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text>CardProductComponent</Text>
                    )}
                />
            </BodyComponents>
        </View>
    )
}
