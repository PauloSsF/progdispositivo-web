import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  View,
  TextInput,
  Button
} from 'react-native';
import styled from 'styled-components/native';
import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const Page = styled.View`
  background-color: #e2e2e2;
  flex: 1;
`;

const Cabecalho = styled.View`
  background-image: linear-gradient(to right, rgba(135,206,250), rgba(30,144,255));
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.Text`
  color: #eee;
  font-size: 30;
  font-weight: bold;
  font-family: "Poppins_400Regular";
`;

const Conteudo = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
`;

const Rodape = styled.View`
  background-image: linear-gradient(to right, rgba(135,206,250), rgba(30,144,255));
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DesenvolvidoPor = styled.Text`
  color: #eee;
  justify-content: center;
  align-items: center;
  font-size: 15;
  font-weight: bold;
  font-family: "Poppins_400Regular";
`;

const Input = styled.TextInput`
  border: 1px solid #1E90FF;
  height: 40px;
  width: 200px;
  background-color: #87CEEB;
  margin-top: 10;
`;

const Operacoes = styled.View`
  flex-direction: row;
  font-family: "Poppins_400Regular";
  margin-top: 10;
`;

const Resultado = styled.Text`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20;
  font-family: "Poppins_400Regular";
`;

const BtnAdd = styled.View`
  flex-direction: row;
  font-family: "Poppins_400Regular";
  margin-right:5;
`;

const BtnSub = styled.View`
  flex-direction: row;
  font-family: "Poppins_400Regular";
  margin-right:5;
`;

const BtnMult = styled.View`
  flex-direction: row;
  font-family: "Poppins_400Regular";
  margin-right:5;
`;

const BtnResult = styled.View`
  margin-top: 10;
`;

export default function App() {
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [operacao, setOperacao] = useState();
  const [resultado, setResultado] = useState();

  const fonts = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if(!fonts){
    return <AppLoading/>
  }

  function handleClick(){
    if(operacao === "+"){
      setResultado(parseInt(n1) + parseInt(n2));
    }
    else if(operacao === "-"){
      setResultado(parseInt(n1) - parseInt(n2));
    }
    else if(operacao === "*"){
      setResultado(parseInt(n1) * parseInt(n2));
    }
    else if(operacao === "/"){
      setResultado(parseInt(n1) / parseInt(n2));
    }
  }

  return (
    <Page>
      <Cabecalho>
        <Titulo>Meu App - Calculadora</Titulo>
      </Cabecalho>
      <Conteudo>
      <Input onChangeText={e=>setN1(e)}></Input>
      <Operacoes>
        <BtnAdd>
          <Button title="+" onPress={e=>setOperacao("+")}></Button>
        </BtnAdd>
        <BtnSub>
          <Button title="-" onPress={e=>setOperacao("-")}></Button>
        </BtnSub>
        <BtnMult>
          <Button title="*" onPress={e=>setOperacao("*")}></Button>
        </BtnMult>
          <Button title="/" onPress={e=>setOperacao("/")}></Button>
      </Operacoes>
      <Input onChangeText={e=>setN2(e)}></Input>
      <BtnResult>
        <Button title="Calcular" onPress={handleClick}></Button>
      </BtnResult>
      <Resultado>Resultado: {n1} {operacao} {n2} = {resultado}</Resultado>
      </Conteudo>
      <Rodape>
      <DesenvolvidoPor>
        Desenvolvido por: Paulo Sérgio©
      </DesenvolvidoPor>
      </Rodape>
    </Page>
  );
}