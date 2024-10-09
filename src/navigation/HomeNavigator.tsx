import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import a from "../layouts/Telalogin";
import Telalogin from "../layouts/TelaPrincipal";

type RootStackParamList = {
    Telalogin: undefined;
    
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Telalogin" 
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Telalogin" component={Telalogin} />
        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 
    'Telalogin'>;    

export default HomeNavigator;
export type {
    PrincipalProps
};