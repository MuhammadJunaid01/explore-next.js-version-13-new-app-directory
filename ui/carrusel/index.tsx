"use client";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

interface CarruselProps {
  data: { img: string | StaticImageData; info: string; id: number }[];
}
const Carousel = ({ data }: CarruselProps) => {
  const [index, setIndex] = useState(0);
  let timer: number = 5000;
  const itemShow = data.slice(index, index + 3);
  const prev = () => {
    index === 0 ? setIndex(data.length - 3) : setIndex((index) => index + 3);
  };

  const next = useCallback(() => {
    index + 3 === data.length ? setIndex(0) : setIndex((index) => index + 3);
  }, [data.length, index]);
  useEffect(() => {
    if (index === data.length) {
      setIndex(0);
    }
    let interval = setInterval(() => {
      next();
    }, timer);
    return () => clearInterval(interval);
  }, [data.length, index, next, timer]);
  return (
    <div className="carrusel_container">
      <h1>hello carrusel </h1>
      <div className="carrusel_conent">
        {itemShow.map((item, i) => (
          <div className={`carrusel item${i}`} key={i}>
            <div key={i}>
              <h1>id:{item.id}</h1>
              <Image
                className={`carrusel_image carrusel_image${i}`}
                src={item.img}
                width={300}
                height={200}
                alt="img"
              />
              <div className={`content${i}`}>
                <h2>{item.info}</h2>
              </div>
            </div>
            <input type="radio" name="" id="" />
          </div>
        ))}
      </div>

      <button
        className="mx-5 bg-slate-900 py-3 px-9 text-gray-100"
        onClick={prev}
      >
        Prev
      </button>
      <button className="px-9 bg-red-300 text-white py-3" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
