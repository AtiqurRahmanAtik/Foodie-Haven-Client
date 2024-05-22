import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/FireBase.config";
import {  updateProfile } from "firebase/auth";

 export const authContext = createContext(null);
 

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [ count, setCount] = useState(1);

    //create user or registration
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sing In User
    const singInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    
    //SingOut 
    const singOut = () =>{
        setLoading(true)
        return signOut(auth)
        
    }

    //update Profile 

    const updateProfileUser =(name,photo) =>{

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


    //user observer
   useEffect(()=>{
    const unSubsCribe = onAuthStateChanged(auth, currentUser =>{

        setUser(currentUser)
        console.log('current User : ', currentUser);
        setLoading(false);

    });

    return () => {
        return unSubsCribe();
    }

   },[])



   //authInfo
    const authInfo = { 

        user,
        loading,
        createUser,
        singInUser,
        singOut,
        updateProfileUser,
        setCount,
        count
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;