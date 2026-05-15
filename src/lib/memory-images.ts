import type { StaticImageData } from "next/image";

import img00 from "@/assets/0327c8e9-4f04-4cb2-9ed5-41337b22f432.jpg";
import img01 from "@/assets/0679942b-eb72-4bab-ab04-5e56346f2a21.jpg";
import img02 from "@/assets/38e8557c-e394-448a-8d2e-e8e6722c8add.jpg";
import img03 from "@/assets/3b5c951f-ee05-4d49-ac2b-b95296720ab4.jpg";
import img04 from "@/assets/51c9c6a3-0569-42b2-a54e-68daeb68f175.jpg";
import img05 from "@/assets/51e4a00b-4b19-481f-a90b-c11c3f31c7f7.jpg";
import img06 from "@/assets/5aa5e96d-8592-434f-aa33-b82db43510d3.jpg";
import img07 from "@/assets/5fa6e192-0921-47e7-be97-419130fca54a.jpg";
import img08 from "@/assets/9c9448b4-ba89-4c7f-bb95-dd2461e83424.jpg";
import img09 from "@/assets/a261699f-8462-40cc-a14f-045cbcdb6eb2.jpg";
import img10 from "@/assets/b0f2dab1-0579-4a25-9372-51414cbc4511.jpg";
import img11 from "@/assets/bb2dd430-5050-4b5c-8f60-e346a2d0923e.jpg";
import img12 from "@/assets/bcda64f5-538f-45c4-839b-69854440a3f8.jpg";
import img13 from "@/assets/d721f8cb-2818-465d-bf65-08b644eaf578.jpg";
import img14 from "@/assets/d87af2b6-3ab2-4bc4-976e-65f8caeaf58b.jpg";
import img15 from "@/assets/e560c50c-e712-4f2e-88a5-4d6d5236af95.jpg";

export type MemoryPhoto = {
  id: string;
  src: StaticImageData;
  alt: string;
};

export const memoryPhotos: MemoryPhoto[] = [
  { id: "01", src: img00, alt: "Memory 1" },
  { id: "02", src: img01, alt: "Memory 2" },
  { id: "03", src: img02, alt: "Memory 3" },
  { id: "04", src: img03, alt: "Memory 4" },
  { id: "05", src: img04, alt: "Memory 5" },
  { id: "06", src: img05, alt: "Memory 6" },
  { id: "07", src: img06, alt: "Memory 7" },
  { id: "08", src: img07, alt: "Memory 8" },
  { id: "09", src: img08, alt: "Memory 9" },
  { id: "10", src: img09, alt: "Memory 10" },
  { id: "11", src: img10, alt: "Memory 11" },
  { id: "12", src: img11, alt: "Memory 12" },
  { id: "13", src: img12, alt: "Memory 13" },
  { id: "14", src: img13, alt: "Memory 14" },
  { id: "15", src: img14, alt: "Memory 15" },
  { id: "16", src: img15, alt: "Memory 16" },
];
