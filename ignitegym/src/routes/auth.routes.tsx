
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Signin } from '@screens/Signin';

import { SignUp } from '@screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator>

        <Screen
             name="Signin" 
             component={Signin} 
        />


        
        <Screen
             name="SignUp" 
             component={SignUp} 
        />


    </Navigator>
    
  )
}