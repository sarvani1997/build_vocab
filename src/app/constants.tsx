export type Alphabet = {
  letter: string;
  word: string;
  picture: string;
  sound?: string;
  id: number;
};

export const vocab: Alphabet[] = [
  { letter: "A", word: "Apple", picture: "/vocab_img/apple.jpeg", id: 1 },
  { letter: "B", word: "Ball", picture: "/vocab_img/ball.webp", id: 2 },
  {
    letter: "C",
    word: "Cat",
    picture: "/vocab_img/cat.webp",
    sound: "/sounds/cat.mp3",
    id: 3,
  },
  {
    letter: "D",
    word: "Dog",
    picture: "/vocab_img/dog.webp",
    sound: "/sounds/dog.mp3",
    id: 4,
  },
  {
    letter: "E",
    word: "Elephant",
    picture: "/vocab_img/elephant.webp",
    sound: "/sounds/elephant.wav",
    id: 5,
  },
  { letter: "F", word: "Fox", picture: "/vocab_img/fox.jpeg", id: 6 },
  { letter: "G", word: "Giraffe", picture: "/vocab_img/giraffe.jpeg", id: 7 },
  { letter: "H", word: "Hat", picture: "/vocab_img/hat.webp", id: 8 },
  { letter: "I", word: "Icecream", picture: "/vocab_img/icecream.webp", id: 9 },
  { letter: "J", word: "Jug", picture: "/vocab_img/jug.jpeg", id: 10 },
  { letter: "K", word: "Kite", picture: "/vocab_img/kite.jpeg", id: 11 },
  { letter: "L", word: "Lion", picture: "/vocab_img/lion.jpeg", id: 12 },
  { letter: "M", word: "Mango", picture: "/vocab_img/mango.jpeg", id: 13 },
  { letter: "N", word: "Nest", picture: "/vocab_img/nest.jpeg", id: 14 },
  { letter: "O", word: "Orange", picture: "/vocab_img/orange.jpeg", id: 15 },
  { letter: "P", word: "Parrot", picture: "/vocab_img/parrot.jpeg", id: 16 },
  { letter: "Q", word: "Quiet", picture: "/vocab_img/quiet.jpeg", id: 17 },
  { letter: "R", word: "Rabbit", picture: "/vocab_img/rabbit.jpeg", id: 18 },
  { letter: "S", word: "Snake", picture: "/vocab_img/snake.jpeg", id: 19 },
  { letter: "T", word: "Train", picture: "/vocab_img/train.jpeg", id: 20 },
  {
    letter: "U",
    word: "Umbrella",
    picture: "/vocab_img/umbrella.jpeg",
    id: 21,
  },
  { letter: "V", word: "Van", picture: "/vocab_img/van.jpeg", id: 22 },
  { letter: "W", word: "Watch", picture: "/vocab_img/watch.jpeg", id: 23 },
  {
    letter: "X",
    word: "Xylophone",
    picture: "/vocab_img/xylophone.jpeg",
    id: 24,
  },
  { letter: "Y", word: "Yak", picture: "/vocab_img/yak.jpeg", id: 25 },
  { letter: "Z", word: "Zip", picture: "/vocab_img/zip.jpeg", id: 26 },
];
