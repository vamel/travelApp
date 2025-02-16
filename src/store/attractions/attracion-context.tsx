import {createContext, useState} from "react";
import {collection, startAfter, getDocs, limit, query, where, orderBy, documentId} from "firebase/firestore";
import {db} from "../../firebase/config";

export const AttractionContext = createContext(
    {
        currentCity: "",
        attractionList: [],
        fetchData: (location: string) => {},
        fetchMore: () => {},
        deleteAttraction: (id: string) => {}
    }
);

const AttractionContextProvider = ({children}) => {
    const [currentCity, setCurrentCity] = useState("");
    const [attractionList, setAttractionList] = useState([]);
    const [lastId, setLastId] = useState("");

    const fetchData = async (city: string) => {
        const attrRef = collection(db, "attractions");
        setCurrentCity(city.toLowerCase());
        const q = query(attrRef,
            where("city", "==", city.toLowerCase()),
            limit(10), orderBy(documentId()));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            setAttractionList([]);
            setLastId("0");
            return;
        }
        const receivedAttractionList = querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        });
        setAttractionList(receivedAttractionList);
        setLastId(querySnapshot.docs.pop().id);
    }

    const fetchMore = async () => {
        const attrRef = collection(db, "attractions");
        const q = query(attrRef,
            where("city", "==", currentCity),
            limit(5), orderBy(documentId()), startAfter(lastId));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return;
        }
        const receivedAttractionList = querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        });
        setAttractionList((attractionList) => [...attractionList, ...receivedAttractionList]);
        setLastId(querySnapshot.docs.pop().id);
    }

    const deleteAttraction = (id: string) => {
        setAttractionList(attractionList => attractionList.filter(attr => attr.id !== id));
    }

    const value = {
        currentCity: currentCity,
        attractionList: attractionList,
        fetchData: fetchData,
        fetchMore: fetchMore,
        deleteAttraction: deleteAttraction
    }

    //@ts-ignore
    return <AttractionContext.Provider value={value}>{children}</AttractionContext.Provider>;
}

export default AttractionContextProvider;
