import {User} from "../../models/classes/User";
import {Country} from "../../models/enums/Country";
import {Hobby} from "../../models/enums/Hobby";
import {Language} from "../../models/enums/Language";
import {render, screen} from "@testing-library/react-native";
import UserInfo from "../../components/userprofile/UserInfo";

describe("UserInfo tests", () => {
   const emptyUserInfo: User = {
       bio: "",
       birthdate: "",
       countries: [],
       email: "",
       favourite_city: "",
       favourites: [],
       firstname: "",
       hobbies: [],
       instagram: "",
       languages: [],
       last_location: "",
       place_of_origin: "",
       profile_picture_url: "",
       uid: "",
       username: ""
   };

   const fullUserInfo: User = {
       bio: "Hey!",
       birthdate: "2000-01-01",
       countries: ["Canada" as Country],
       email: "example@mail.com",
       favourite_city: "Chicago",
       favourites: [],
       firstname: "Test",
       hobbies: ["Board games" as Hobby, "Cafes" as Hobby],
       instagram: "exampleIg",
       languages: ["English" as Language],
       last_location: "Boston",
       place_of_origin: "New York",
       profile_picture_url: "image.com\\Testuser",
       uid: "1",
       username: "TestUser"
   };

   test("Should be rendered", () => {
        const userInfo = render(<UserInfo userInfo={emptyUserInfo} location={""} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("Interests")).toBeDefined();
   });

   test("Should render bio field", () => {
       const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
       expect(userInfo).toBeDefined();
       expect(screen.getByText("Hey!")).toBeDefined();
   });

    test("Should render age field", () => {
        const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("Age")).toBeDefined();
    });

    test("Should render countries field", () => {
        const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("Canada")).toBeDefined();
    });

    test("Should render favourite city field", () => {
        const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("Chicago")).toBeDefined();
    });

    test("Should render name field", () => {
        const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("Test")).toBeDefined();
    });

    test("Should render hobbies field", () => {
        const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("Board Games")).toBeDefined();
        expect(screen.getByText("Cafes")).toBeDefined();
    });

    test("Should render languages field", () => {
        const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("English")).toBeDefined();
    });

    test("Should render last location field", () => {
        const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("Boston")).toBeDefined();
    });

    test("Should render place of origin field", () => {
        const userInfo = render(<UserInfo userInfo={fullUserInfo} location={"Boston"} />);
        expect(userInfo).toBeDefined();
        expect(screen.getByText("New York")).toBeDefined();
    });
});