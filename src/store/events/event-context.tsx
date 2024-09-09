import {createContext, useState} from "react";
import {collection, startAfter, getDocs, limit, query, where, orderBy, documentId} from "firebase/firestore";
import {db} from "../../firebase/config";

export const EventContext = createContext(
    {
        currentCity: "",
        eventList: [],
        fetchData: (location: string) => {},
        fetchMore: () => {}
    }
);

const EventContextProvider = ({children}) => {
    const [currentCity, setCurrentCity] = useState("");
    const [eventList, setEventList] = useState([]);
    const [lastId, setLastId] = useState("");

    const fetchData = async (city: string) => {
        const eventRef = collection(db, "events");
        setCurrentCity(city.toLowerCase());
        const q = query(eventRef,
            where("city", "==", city.toLowerCase()),
            limit(10), orderBy(documentId()));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            setEventList([]);
            setLastId("0");
            return;
        }
        const receivedAttractionList = querySnapshot.docs.map(doc => doc.data());
        setEventList(receivedAttractionList);
        setLastId(querySnapshot.docs.pop().id);
    }

    const fetchMore = async () => {
        const eventRef = collection(db, "events");
        const q = query(eventRef,
            where("city", "==", currentCity),
            limit(2), orderBy(documentId()), startAfter(lastId));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return;
        }
        const receivedEventList = querySnapshot.docs.map(doc => doc.data());
        setEventList((eventList) => [...eventList, ...receivedEventList]);
        setLastId(querySnapshot.docs.pop().id);
    }

    const value = {
        currentCity: currentCity,
        eventList: eventList,
        fetchData: fetchData,
        fetchMore: fetchMore
    }

    //@ts-ignore
    return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}

export default EventContextProvider;
