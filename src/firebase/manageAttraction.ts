import {User} from "../models/classes/User";
import {addDoc, collection, deleteDoc, doc, setDoc, updateDoc} from "firebase/firestore";
import {db, storage} from "./config";
import {Attraction} from "../models/classes/Attraction";
import {ref, uploadBytes} from "firebase/storage";

export const createAttraction = async (attractionData: Attraction) => {
    const id = new Date().getTime().toString();
    const imageRef = ref(storage, `attractions/${attractionData.city}/${id}/picture.jpg`);
    fetch(attractionData.images_url[0]).then((blobRes) => {
        return blobRes.blob();
    }).then((blob) => {
        uploadBytes(imageRef, blob).then(() => {
            const imageUrl = `https://storage.cloud.google.com/travel-app-bd756.appspot.com/attractions/${attractionData.city}/${id}/picture.jpg`;
            attractionData = {...attractionData, images_url: [imageUrl]}
        }).then(() => {
            setDoc(doc(db, "attractions", id), attractionData);
        });
    });
}

export const deleteAttraction = async (currentUser: User, id: string) => {
    if (currentUser.is_admin) {
        await deleteDoc(doc(db, "attractions", id));
    }
    else {
        return;
    }
}