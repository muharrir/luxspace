import { Open_Sans, Merriweather } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});
