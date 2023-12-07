// import vision
import a from "./assets/vision/anemo.svg";
import c from "./assets/vision/cryo.svg";
import d from "./assets/vision/dendro.svg";
import h from "./assets/vision/hydro.svg";
import e from "./assets/vision/electro.svg";
import g from "./assets/vision/geo.svg";
import p from "./assets/vision/pyro.svg";

export const ellipsis = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
  </svg>
);

export const close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const eli = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
    />
  </svg>
);

export const visionData = [
  {
    id: 1,
    src: a,
    vision: "anemo",
  },
  {
    id: 2,
    src: c,
    vision: "cryo",
  },
  {
    id: 3,
    src: d,
    vision: "dendro",
  },
  {
    id: 4,
    src: e,
    vision: "electro",
  },
  {
    id: 5,
    src: g,
    vision: "geo",
  },
  {
    id: 6,
    src: h,
    vision: "hydro",
  },
  {
    id: 7,
    src: p,
    vision: "pyro",
  },
];

export const starData = [
  {
    id: 3,
    stars: "⭐⭐⭐",
  },
  {
    id: 4,
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    stars: "⭐⭐⭐⭐⭐",
  },
];
