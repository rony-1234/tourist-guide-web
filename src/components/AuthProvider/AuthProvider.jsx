import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../public/Firebase.config';



export const Authcontext = createContext(null)

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    const createuser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut (auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoading(false)
        }) 
        return () =>{
            unSubscribe()
        }
    })

    const authInfo = {
        user,
        loading,
        createuser,
        signIn,
        logOut,
        googleSignIn
    }
    return (
        <div>
            <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
        </div>
    );
};


export default AuthProvider;