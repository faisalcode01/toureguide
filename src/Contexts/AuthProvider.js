import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init';



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider);
    }

    const providerLogout = ()=>{
        return signOut(auth);
    }

    const providerCreateUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const providerLoginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const providerUpdateUserProf = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }
    const authInfo = {
        user,
        providerLogin,
        providerLogout,
        providerCreateUser,
        providerLoginUser,
        providerUpdateUserProf,
        loading
    };


    useEffect(() =>{
        const unSubscribe  = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[]);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;