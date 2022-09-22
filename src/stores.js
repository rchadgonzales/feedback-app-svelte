import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam rerum, voluptas ducimus corporis sapiente ea.",
  },
  {
    id: 2,
    rating: 7,
    text: "	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam rerum, voluptas ducimus corporis sapiente ea.",
  },
  {
    id: 3,
    rating: 8,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vel.",
  },
]);
