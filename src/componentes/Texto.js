import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
    let newStyle = estilos.texto;
    if (style?.fontWeight == "bold" && style.fontSize != 16) {
        newStyle = estilos.textoTitulo;
    }
    return <Text style={[style, newStyle]}>{children}</Text>
}
const estilos = StyleSheet.create({
    texto: {
        fontSize: 16,
        lineHeight: 26,
    },
    textoTitulo: {
        fontSize: 26,
        lineHeight: 42,
    }
})