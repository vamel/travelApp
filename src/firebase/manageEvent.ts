import {User} from "../models/classes/User";
import {Event} from "../models/classes/Event";
import {addDoc, collection, deleteDoc, doc} from "firebase/firestore";
import {db} from "./config";

export const createEvent = async (eventData: Event) => {
    addDoc(collection(db, "events"), eventData);
}

export const deleteEvent = async (currentUser: User, eventData: Event) => {
    if (currentUser.is_admin) {
        await deleteDoc(doc(db, "events", eventData.id));
    }
    else {
        return;
    }
}