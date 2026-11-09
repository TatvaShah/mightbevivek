import { IBM_Plex_Mono, Newsreader, Playfair_Display, UnifrakturMaguntia } from "next/font/google";

export const blackletter = UnifrakturMaguntia({ weight: "400", subsets: ["latin"], variable: "--f-black", display: "swap" });
export const display = Playfair_Display({ weight: ["700", "900"], style: ["normal", "italic"], subsets: ["latin"], variable: "--f-display", display: "swap" });
export const body = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--f-body", display: "swap" });
export const mono = IBM_Plex_Mono({ weight: ["400", "600"], subsets: ["latin"], variable: "--f-mono", display: "swap" });
