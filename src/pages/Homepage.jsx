import "./Homepage.css"
import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Block from "../components/Block";
import Footer from "../components/Footer";

function Homepage(){
    return(
        <>
        <Header/>
        <Slider>
            <div className="slide">
                <img src="../resurse-statice/images/slide1.jpg" alt="" />
            </div>

            <div className="slide">
                <img src="../resurse-statice/images/slide2.jpg" alt="" />
            </div>

            <div className="slide">
                <img src="../resurse-statice/images/slide3.jpg" alt="" />
            </div>

        </Slider>

        <div className="container">
            <div className="container_block"><Block icon="content1.jpg" title="titlul 1" description="Descriere 1"/></div>
            
            <div className="container_block"><Block icon="content2.jpg" title="titlul 2" description="Descriere 2"/></div>
            <div className="container_block"><Block icon="content3.jpg" title="titlul 3" description="Descriere 3"/></div>
            <div className="container_block"><Block icon="content4.jpg" title="titlul 4" description="Descriere 4"/></div>
        </div>
        <Footer/>
        </>
    )
}

export default Homepage;