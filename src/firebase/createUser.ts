import {db, storage} from "./config";
import {User} from "../models/classes/User";
import {uploadBytes, ref} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";

export const putUser = async (userData: User) => {
    let {uid, ...userDetails} = userData;

    const sendData = async (userDetails) => {
        const userDataSent = {
            ...userDetails,
            invitations_sent: [],
            invitations_received: [],
            users_blocked: [],
            blocked_by: []
        };

        await setDoc(doc(db, "users", uid), userDataSent);
        try {
            //@ts-ignore
            await setDoc(doc(db, "usernames", userDetails.username), {uid: uid});
        } catch(err) {
            return err;
        }
    }

    if (userDetails.profile_picture_url) {
        const imageRef = ref(storage, `users/${uid}/profile_picture.jpg`);
        fetch(userDetails.profile_picture_url).then((blobRes) => {
            return blobRes.blob();
        }).then((blob) => {
            uploadBytes(imageRef, blob).then(() => {
                const imageUrl = `https://storage.cloud.google.com/travel-app-bd756.appspot.com/users/${uid}/profile_picture.jpg`;
                userDetails = {...userDetails, profile_picture_url: imageUrl};
                sendData(userDetails);
            });
        });
    } else {
        await sendData(userDetails);
    }
}
