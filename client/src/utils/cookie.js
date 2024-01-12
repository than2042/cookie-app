import { v4 as uuidv4 } from "uuid";

export let cookie = [
  {
    id: uuidv4(),
    name: "Nana",
    price: 20,
    number: "200g",
    quantity: 6000,
    image: "/images/nana.svg",
    button: "Buy",
  },
  {
    id: uuidv4(),
    name: "Bank",
    price: 10,
    number: "150g",
    quantity: 400000,
    image: "/images/bank.svg",
    button: "Buy",
  },
  {
    id: uuidv4(),
    name: "Sister Cookies",
    price: 30,
    number: "200g",
    quantity: 70000,
    image: "/images/sister.svg",
    button: "Buy",
  },
  {
    id: uuidv4(),
    name: "Factory",
    price: 40,
    number: "350g",
    quantity: 200000,
    image: "/images/factory.svg",
    button: "Buy",
  },
];
