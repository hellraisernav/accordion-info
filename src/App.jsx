import StarRating from "./components/Rating System";
import Accordion from "./components/accordion";
import RandomColor from "./components/colorGenerator";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/infinite-load";

function App() {
    return (
        <>
            <div>
                <Accordion />
                <RandomColor />
                <StarRating noOfStars={10} />
                <ImageSlider
                    url={"https://picsum.photos/v2/list"}
                    limit={"10"}
                />
                <LoadMoreData />
            </div>
        </>
    );
}

export default App;
