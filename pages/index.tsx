import NavBar from '../components/navbar';
import Carousel from '../components/carousel';
import Contacto from '../components/contacto';
import Header1 from '../components/header1';
import Footer1 from '../components/footer1';
import Concurso from '../components/concurso';



const Indexpage = () => {
  return (
    <>
      <Header1 />
      <NavBar />
      <Carousel />
      <Concurso/>
      <Contacto />
      <Footer1/>


    </>
  );
};
export default Indexpage;