import { VStack ,Image, Center,Text,Heading} from "@gluestack-ui/themed";

/* o typescript nao tava entendendo o ".png" entao tive que criar um arquivo types para isso */

import backgrtoundImg from "@assets/background.png";

/* como a logo tava em svg tivemos que baixar umas dependecias o metro.config.js */

/* temos que criar um arquivo tipo para passar o novo tipo svg */

/* peguei essa documentação do site    https://github.com/kristerkari/react-native-svg-transformer */

/* agora conseguimos passar a logo */

import Logo from "@assets/logo.svg";



/* tempos que importar os componentes  de input */

import { Input } from "@components/input";








export function Signin() {
  
    return (
        <VStack flex={1} bg="$gray700">

            <Image
                w="$full"
                h={624}
                source={backgrtoundImg}
                defaultSource={backgrtoundImg}
                alt="Pesssoas treinando"
                position="absolute"
                

               
               
            />

            <VStack flex = {1} px ="$10" pb="$16">


            <Center my="$24">
                
                <Logo />
                
                <Text color ="$gray100" fontSize="$sm">

                    treine sua mente e seu corpo


                </Text>

            </Center>

            <Center gap= "$2">
                <Heading color="$gray100" >
                    Acesse sua conta
                </Heading>

                <Input  placeholder = "Email"/>
                <Input  placeholder = "Senha"/>
             </Center>

             </VStack>


        </VStack>
    )
}