import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./config";

export const handleSingUp = async (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user.uid);
            }).catch((err) => {
            const errorCode = err.code;
            const errorMsg = err.message;
            reject(errorMsg);
        });
    });
}

export const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        }).catch((err) => {
        const errorCode = err.code;
        const errorMsg = err.message;
        console.log(errorCode, errorMsg);
    });
}

export const handleSignOut = () => {
    signOut(auth).then((res) => {
        console.log(res);
    }).catch((err) => {
        const errorCode = err.code;
        const errorMsg = err.message;
    });
}
