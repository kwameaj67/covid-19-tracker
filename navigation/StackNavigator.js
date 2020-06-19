import React,{useRef} from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import useLinking from './useLinking';
import Splash from '../screens/Auth/Splash'
import Verification from '../screens/Auth/Verification';
import Signup from '../screens/Auth/Signup';
import Permissions from '../screens/Auth/Permissions';
import { AuthContext } from '../context/AuthContext'


const App = createStackNavigator();
const Auth = createStackNavigator();
const Root = createStackNavigator();

const AuthScreens = ()=>{
    return(
        <Auth.Navigator headerMode="none">
            <Auth.Stack name="signup" component={Signup} />
            <Auth.Stack name="verification" component={Verification} />
            <Auth.Stack name="permissions" component={Permissions} />
        </Auth.Navigator>
    )
}
const AppScreens = ()=>{
    return(
        <App.Navigator headerMode="none">
             <App.Screen name="Root" component={BottomTabNavigator} />
         </App.Navigator>
    )
}
const RootStackScreens = ({userToken})=>{
    return(
        <Root.Navigator headerMode="none" >
            {userToken ? (
                <Root.Screen name="App" component={AppScreens} options={{animationEnabled:false}}/>
            ):
            (
                <Root.Screen name="Auth" component={AuthScreens}  options={{animationEnabled:false}}/>
            )
            }
           
        </Root.Navigator>
    )
}
function StackNavigator({navigation}){
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = useRef();
    const [isLoading,setIsLoading] = React.useState(true);
    const [userToken,setUserToken] = React.useState(null);
    const authContext = React.useMemo(()=>{
        return {
            signIn:()=>{
                setIsLoading(false);
                setUserToken("userId");
            },
            signUp:()=>{
                setIsLoading(false);
                setUserToken("userId")
            },
            signOut:()=>{
                setIsLoading(false);
                setUserToken(null);
            },
        }
    })
    React.useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    })
    // if(isLoading){
    //     return(
    //         <Splash/>
    //     )
    // }
    return(
        <NavigationContainer  ref={containerRef} initialState={initialNavigationState}>
               <App.Navigator headerMode="none">
                  <App.Screen name="Root" component={BottomTabNavigator} />
             </App.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator;

  