import {React,useState,useEffect} from "react";
import Carrusel from "./Carrusel";
import { v4 as uuidv4 } from "uuid";
import ListDestacados from "./ListDestacados";

const destacados = [
  {
    id: uuidv4(),
    img: "/img(remeras)/remera6.jpeg",
    titulo: "REMERA 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo3.jpeg",
    titulo: "CARGO 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/bermudas/bermuda4.jpeg",
    titulo: "BERMUDA 4",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo5.jpeg",
    titulo: "BUZO 5 ",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/cargos/cargo11.jpeg",
    titulo: "CARGO 11",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(joggins)/joggin7.jpeg",
    titulo: "JOGGIN 7",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera7.jpeg",
    titulo: "REMERA 7",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa10.jpeg",
    titulo: "ZAPAS 10",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/zapas/zapa14.jpeg",
    titulo: "ZAPAS 14",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/img(remeras)/remera12.jpeg",
    titulo: "REMERA 12",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/mochilas/back3.jpeg",
    titulo: "BACK 3",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  },
  {
    id: uuidv4(),
    img: "/gorras/gorra6.jpeg",
    titulo: "GORRA 6",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    cuotas: "",
  }
];

const Destacados = () => {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const totalSlides = Math.ceil(destacados.length / cardsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(1);

  const renderSlides = () => {
    const startIndex = (currentSlide - 1) * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;

    return destacados
      .slice(startIndex, endIndex)
      .map((item, index) => (
        <div className="card-content-destacados" key={index}>
          <ListDestacados
            id={item.id}
            titulo={item.titulo}
            img={item.img}
            antiguo={item.antiguo}
            cuotas={item.cuotas}
            off={item.off}
            precio={item.precio}
          />
        </div>
      ));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? totalSlides : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides ? 1 : prevSlide + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        setCardsPerSlide(1);
      } else if (screenWidth < 768) {
        setCardsPerSlide(2);
      } else if (screenWidth < 1200) {
        setCardsPerSlide(3);
      } else {
        setCardsPerSlide(4);
      }
    };
    // Agrega un listener para manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El segundo argumento del useEffect asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div className="destacados-carousel">
      <Carrusel prevSlide={handlePrevSlide} nextSlide={handleNextSlide}>
        {renderSlides()}
      </Carrusel>
    </div>
  );
};

export default Destacados;
