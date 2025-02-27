export const vehicles = [
  {
    id: 1,
    name: "ducatoMaxi",
    images: [
      "/images/maxi1.jpg",
      "/images/maxi2.jpg",
      "/images/maxi3.jpg",
      "/images/maxi4.jpg",
    ],
  },
  {
    id: 2,
    name: "ducato",
    images: [
      "/images/ducato1.jpg",
      "/images/ducato2.jpg",
      "/images/ducato3.jpg",
      "/images/ducato4.jpg",
    ],
  },
  {
    id: 3,
    name: "optima",
    images: [
      "/images/kia1.jpg",
      "/images/kia2.jpg",
      "/images/kia3.jpg",
      "/images/kia4.jpg",
    ],
  },
] as const;

export type Vehicle = typeof vehicles[number];