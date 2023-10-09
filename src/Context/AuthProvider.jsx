import { createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);
  
  
    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const provider = new GoogleAuthProvider()

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
        
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut((auth))
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        

        return () => {unSubscribe()};
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    };

    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>

    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}
export default AuthProvider;