import {
    collection,
    query,
    where,
    limit,
    orderBy,
    documentId, getDocs, setDoc, doc, deleteDoc
} from "firebase/firestore";
import {db} from "../../__mocks__/firebase/config";

describe("Firebase tests", () => {
    global.XMLHttpRequest = require("xhr2");

    test("Should read data from firestore", async () => {
        const ref = collection(db, "test");

        const q = query(ref,
            where("value", "==", "1"),
            limit(10), orderBy(documentId()));
        const querySnapshot = await getDocs(q);

        const receivedDocsList = querySnapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        });

        expect(receivedDocsList).toHaveLength(1);
        expect(receivedDocsList[0].value).toBe("1");
    });

    test("Should write data to firestore", async () => {
        const document = {value: "qwerty"};

        await setDoc(doc(db, "test", "1"), document);

        const ref = collection(db, "test");

        const q = query(ref,
            where(documentId(), "==", "1"),
            limit(1), orderBy(documentId()));
        const querySnapshot = await getDocs(q);

        const receivedDocsList = querySnapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        });

        expect(receivedDocsList[0].value).toBe("qwerty");
    });

    test("Should update data in firestore", async () => {
        const document = {value: "new value"};

        await setDoc(doc(db, "test", "1"), document);

        const ref = collection(db, "test");

        const q = query(ref,
            where(documentId(), "==", "1"),
            limit(1), orderBy(documentId()));
        const querySnapshot = await getDocs(q);

        const receivedDocsList = querySnapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        });

        expect(receivedDocsList[0].value).toBe("new value");
    });

    test("Should delete data from firestore", async () => {
        await deleteDoc(doc(db, "test", "to_delete"));

        const ref = collection(db, "test");

        const q = query(ref,
            where(documentId(), "==", "to_delete"),
            limit(1), orderBy(documentId()));
        const querySnapshot = await getDocs(q);

        const receivedDocsList = querySnapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        });

        expect(receivedDocsList).toHaveLength(0);
    });
});