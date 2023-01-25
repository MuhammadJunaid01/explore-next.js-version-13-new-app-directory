import Carrusel from "@/ui/carrusel";
import { Inter } from "@next/font/google";
import caruImg from "public/user.jpg";

const inter = Inter({ subsets: ["latin"] });
const data = [
  {
    id: 1,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 2,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 3,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 4,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 5,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 6,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 7,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 8,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 9,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 10,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 11,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 12,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 13,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 14,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 15,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 16,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 17,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
  {
    id: 18,
    img: caruImg,
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea placeat atque veniam iusto tempora consequatur alias quam perspiciatis accusantium!",
  },
];
export default function Home() {
  return (
    <main>
      <h1 className="">this is our home page</h1>
      <Carrusel data={data} />
    </main>
  );
}
