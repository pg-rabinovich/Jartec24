import styles from '../styles/inicio.module.css';



const Carousel = () => {
    return (
        <div className={`carousel slide carousel-fade p-5 mx-auto text-center ${styles.fondo}`} id="carouselExampleFade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/carrousel1.jpg" className="d-block w-65 mx-auto" alt="carousel1" />
                </div>
                <div className="carousel-item">
                    <img src="/images/carrousel2.jpg" className="d-block w-65 mx-auto" alt="carousel2" />
                </div>
                <div className="carousel-item">
                    <img src="/images/carrousel3.jpg" className="d-block w-65 mx-auto" alt="carousel3" />
                </div>
                <div className="carousel-item">
                    <img src="/images/carrousel4.jpg" className="d-block w-65 mx-auto" alt="carousel4" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
