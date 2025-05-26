import {createBottomTabNavigator,BottomTabNavigationProp} from '@react-navigation/bottom-tabs';  




import HomeSvgs from '@assets/home.svg';
import HistorySvgs from '@assets/history.svg';
import ProfileSvgs from '@assets/profile.svg';  

import { gluestackUIConfig } from "../../config/gluestack-ui.config"; // ajuste o caminho conforme necessário

import {Home} from '../screens/Home';

import {Profile} from '../screens/Profile';

import {History} from '../screens/History';

import {Exercise} from '../screens/Exercise';

const { Navigator , Screen } = createBottomTabNavigator();


type AppRoutes ={
  home: undefined;
  exercise: undefined;
  profile: undefined;
  history: undefined;
  
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;





export function AppRoutes() {
  const { tokens } = gluestackUIConfig;
  const iconSize = tokens.space["6"];
    return(
        <Navigator screenOptions={{
          
          headerShown: false,
          tabBarShowLabel: false,     
          tabBarActiveTintColor: tokens.colors.green500,
          
          }}>
            <Screen

            name ="home"
            component={Home}
            options={{
              tabBarIcon: ({color}) => <HomeSvgs fill={color} width={iconSize} height={iconSize}/>
            }}

            />

              <Screen

            name ="History"
            component={History} options={
              {
                tabBarIcon: ({color}) => <HistorySvgs fill={color} width={iconSize} height={iconSize} />
              }
            }

            />


              <Screen

            name ="profile"
            component={Profile} options={
              {
                tabBarIcon: ({color}) => <ProfileSvgs fill={color} width={iconSize} height={iconSize}/>
              }
            }

            />


              <Screen

            name ="exercise"
            component={Exercise}

            />

          
          
        </Navigator>
    );
}