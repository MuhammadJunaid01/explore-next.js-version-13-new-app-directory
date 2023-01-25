/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface CarruselProps {
  data: { img: string | StaticImageData; info: string; id: number }[];
}
const Carrusel = ({ data }: CarruselProps) => {
  const [index, setIndex] = useState(0);
  const itemShow = data.slice(index, index + 3);
  const prev = () => {
    index === 0 ? setIndex(data.length - 3) : setIndex((index) => index + 3);
  };
  const next = () => {
    index + 3 === data.length ? setIndex(0) : setIndex((index) => index + 3);
  };
  useEffect(() => {
    if (index === data.length) {
      setIndex(0);
    }
    let interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length, next]);
  return (
    <div className="carrusel_container">
      <h1>hello carrusel </h1>
      <div className="carrusel_conent">
        {itemShow.map((item, i) => (
          <div className="carrusel" key={i}>
            <div className={`${i === 0 || i === 2 ? ` item${i}` : ""}`} key={i}>
              <h1>id:{item.id}</h1>
              <Image
                className="carrusel_image"
                src={item.img}
                width={300}
                height={200}
                alt="img"
              />
              <h2>{item.info}</h2>
            </div>
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

export default Carrusel;
