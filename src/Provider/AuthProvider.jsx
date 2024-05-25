import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/FireBase.config";

import { GoogleAuthProvider } from "firebase/auth";
import useFetchPublic from "../Componet/Hooks/useFetchPublic";

 export const authContext = createContext(null);

 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const  fetchPublic = useFetchPublic();

   

    //create user or registration
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sing In User
    const singInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    
    //SingOut 
    const singOut = () =>{
        setLoading(true)
        return signOut(auth)
        
    }

    // Google sing IN
    const googleSingIn = ()=> {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //update Profile 

    const profileUpdate =(name,photo) =>{

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


    //user observer
   useEffect(()=>{
    const unSubsCribe = onAuthStateChanged(auth, currentUser =>{

        setUser(currentUser)
        console.log('current User : ', currentUser);
        

        if(currentUser){
        //  get token from server to client and store client
        const currentInfo ={Email : currentUser.email};

        fetchPublic.post('/jwt', currentInfo)
        .then(res =>{
        //   console.log(res.data.token)
        if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
        }
        })
        

        }

        else{
            // remove token from client side
            localStorage.removeItem('access-token');
        }
        setLoading(false);

    });

    return () => {
        return unSubsCribe();
    }

   },[fetchPublic])



   //authInfo
    const authInfo = { 

        user,
        loading,
        createUser,
        singInUser,
        singOut,
        profileUpdate,
        googleSingIn
      
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;