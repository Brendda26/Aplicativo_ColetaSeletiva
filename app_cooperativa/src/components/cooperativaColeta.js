import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { TouchableOpacity } from 'react-native-gesture-handler';

function ListarCooperativa({ solicitacao }) {


    useEffect(() => {

    }, []);


        return(
            <View style={styles.listItem}>
                <Text style={styles.dados}> Nome: {solicitacao.nome}</Text>
                <Text style={styles.dados}> CNPJ: {solicitacao.cnpj}</Text>
                <Text style={styles.dados}> Endereço: {solicitacao.endereco}</Text>
                <Text style={styles.dados}> Quantidade de Funcionário: {solicitacao.qtCooperados}</Text>
             
            </View>
        )


}

const styles= StyleSheet.create({
    dados: {
        color: '#444',
        marginBottom: 10,
        fontSize: 14
    },
    listItem: {
        padding: 20,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: "#741B75",
        marginBottom: 10,
    },    
    button: {
        height: 42,
        backgroundColor: '#741B75',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 3,
       
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    button1: {
        height: 42,
        backgroundColor: '#800000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 3,
       
    },

});
export default (ListarCooperativa);