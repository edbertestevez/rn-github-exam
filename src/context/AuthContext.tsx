import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface IAppState{
    isLoggedIn: boolean
}

interface IUpdateAuth{
    (authUpdate: boolean): void
}

interface IAppContext{
    state: IAppState,
    updateAuth: IUpdateAuth
}

export const AuthContext = React.createContext<Partial<IAppContext>>({});

export const AuthProvider = ({children}:{children: React.ReactNode}) =>{
    const [state, setState] = useState<IAppState>({
        isLoggedIn: false
    })
    
    useEffect(()=>{
        const loadPersistData = async () => {
            const persistData = await AsyncStorage.getItem('@app_context_persist')
            if(persistData){
                setState(JSON.parse(persistData));
            }
        }

        loadPersistData();
    },[])

    useEffect(()=>{
        const savePersistData = async () => {
            await AsyncStorage.setItem('@app_context_persist', JSON.stringify(state));
        }

        savePersistData();
    })

    return(
        <AuthContext.Provider value={{
            state,
            updateAuth: (authUpdate: boolean) : void => {
                setState({...state, isLoggedIn: authUpdate})
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}