export const site = {
  name: "Châm",
  cafeName: "Châm's Birthday",
  reservationFor: "SoSồ",
  date: "May 15, 2026",
  hours: "Open today only · Doors at 9am",
} as const;

export const nav = [
  { href: "#tonight", label: "About tonight" },
  { href: "#memories", label: "Memories" },
  { href: "#guestbook", label: "Messages" },
  { href: "#playlist", label: "Playlist" },
  { href: "#surprise", label: "Surprise" },
] as const;

export const hero = {
  badge: "Reservation confirmed",
  title: "Welcome to",
  subtitle: "",
  cta: "View the menu",
} as const;

export const aboutTonight = {
  title: "Happy Birthday Châm IU",
  paragraphs: [
    "18 (+10) tuổi"
  ],
  menuHighlights: [
    { item: "9h30", note: "Gõ cửa nhà Châm" },
    { item: "10h", note: "Bắt cóc Châm ra quán cafe" },
    { item: "10h – 10h30", note: "Thối bánh ăn nến sinh nhật" },
    { item: "10h30 – 1h30", note: "Hoạt động thú vị - Design cho SoSồ" },
  ],
} as const;

export type GuestbookNote = {
  id: string;
  author: string;
  text: string;
  style: "sticky" | "receipt";
  color?: "blush" | "sage" | "butter" | "latte";
  rotate?: number;
};

export const guestbook: GuestbookNote[] = [
  {
    id: "s1",
    author: "SoSồ IT",
    text: "Chúc Châm sinh nhật zuize, đi chơi vui ạ",
    style: "sticky",
    color: "butter",
    rotate: -2,
  },
  {
    id: "r1",
    author: "Nói hộ Hachi",
    text: "SoSồ needs you to stay healthy and happy",
    style: "receipt",
  },
  {
    id: "s2",
    author: "SoSồ",
    text: "I love your design",
    style: "sticky",
    color: "blush",
    rotate: 3,
  },
  {
    id: "s3",
    author: "Chigau",
    text: "Chúc Châm lun xinh xắn iu đời iu bản thân iu mèo nhaaa",
    style: "sticky",
    color: "sage",
    rotate: -1,
  },
  // {
  //   id: "r2",
  //   author: "Barista note",
  //   text: "TAB: Compliments on typography — 12. Gratitude — ∞. No closing time tonight.",
  //   style: "receipt",
  // },
  // {
  //   id: "s4",
  //   author: "Your favorite coworker",
  //   text: "May your Figma layers stay named and your coffee stay hot.",
  //   style: "sticky",
  //   color: "latte",
  //   rotate: 2,
  // },
];

export const playlist = {
  title: "Tonight's playlist",
  subtitle: "Curated for sketching, smiling, and swaying slightly in your chair.",
  tracks: [
    { title: "Golden Hour", artist: "For slow sips" },
    { title: "Soft Focus", artist: "Layout mode" },
    { title: "Purring Distance", artist: "Cat-approved" },
    { title: "Birthday Light", artist: "The main event" },
    { title: "Stay Awhile", artist: "Encore" },
  ],
} as const;

export const surprise = {
  title: "One last thing…",
  body: "We saved your surprise for the end—like dessert after the guestbook.",
  cta: "Open your surprise",
  href: "#",
} as const;
