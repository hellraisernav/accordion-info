import StarRating from "./components/Rating System";
import Accordion from "./components/accordion";
import RandomColor from "./components/colorGenerator";

function App() {
    return (
        <>
            <div>
                <Accordion />
                <RandomColor />
                <StarRating noOfStars={10} />
            </div>
        </>
    );
}

export default App;
