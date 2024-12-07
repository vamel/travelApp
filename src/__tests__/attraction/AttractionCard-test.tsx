import { render } from "@testing-library/react-native";
import AttractionCard from "../../components/attraction/AttractionCard";

describe('AttractionCard', () => {
    test('AttractionCard is rendered with a given name in its props.', () => {
        const { getByText } = render(<AttractionCard imageUrl={"image.png"} name={"Attraction"} />);

        getByText("Attraction");
    });
});