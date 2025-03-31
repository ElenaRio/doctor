import About from '../components/About/About';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Consultation from '../components/Consultation/Consultation';
import Purpose from '../components/Purpose/Purpose'



function Home(){
    return (
        <div>
            <About/>
            <div className='background'></div>
            <AboutInfo/>
            <Purpose/>
            <Consultation/>
            
        </div>
    )
}

export default Home;