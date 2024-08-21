// import { SliderBox } from "react-native-image-slider-box";

const ImageCarousel = ({data}) => {
    console.log(data);

    return(
        <></>
        // <SliderBox
        //     images={data}
        //     sliderBoxHeight={300}
        // />
    );
    // const renderCarouselItem = ({item, index}) => {
    //     return(
    //         <View>
    //             <Text>{data}</Text>
    //             {/*<Image source={{uri: item}} style={attractionPageStyles.image} />*/}
    //         </View>
    //     );
    // }
    //
    // return(
    //     <View>
    //         <Carousel
    //             data={data}
    //             renderItem={renderCarouselItem}
    //             layout={"default"}
    //             sliderWidth={300}
    //             itemWidth={300}
    //         />
    //     </View>
    // );
}

export default ImageCarousel;
