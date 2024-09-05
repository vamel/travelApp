import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./config";

export const handleSingUp = async (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user.uid);
            }).catch((err) => {
            reject(err.message);
        });
    });
}

export const handleSignIn = (email, password) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user);
            }).catch((err) => {
                reject(err.message);
        });
    });
}

export const handleSignOut = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err.message);
        });
    });
}
