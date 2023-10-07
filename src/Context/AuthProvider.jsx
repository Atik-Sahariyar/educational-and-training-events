import { createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
        .then( result =>  console.log(result))
        .catch(error => console.log(error))
    }

    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut((auth))
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            // setLoading(false)
        });
        
        console.log(user);
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
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