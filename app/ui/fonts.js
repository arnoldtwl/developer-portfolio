import { Oswald, Inter, Teko, Caveat, Chivo, Merriweather_Sans } from "next/font/google";

export const inter = Inter({subsets: ['latin']});
export const oswald = Oswald({
    subsets: ['latin'],
    weights: [700]
});

export const teko = Teko({
    subsets: ['latin'],
    weights: [700]
});

export const caveat = Caveat({
    subsets: ['latin'],
    weights: [700]
});

export const chivo = Chivo({
    subsets: ['latin'],
    weights: [400],
    styles: ['italic']
});

export const merriweatherSans = Merriweather_Sans({
    subsets: ['latin'],
    weights: [400],
    styles: ['italic']
});

