import Home from "../Components/Home";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Services from "../Components/Serivices";
import Experience from "../Components/Experience";

const LandingPage = () => {
    return(
        <>
            <Home/>
            <About/>
            <Portfolio isFullDisplay={false}/>
            <Services />
            <Experience isFullDisplay={false}/>
        </>
    )
}

export default LandingPage;