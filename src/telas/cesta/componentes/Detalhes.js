import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imageFazenda} source={logoFazenda} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <TouchableOpacity style={estilos.estiloBotao}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imageFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        marginTop: 8,
    },
    estiloBotao:{
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
})