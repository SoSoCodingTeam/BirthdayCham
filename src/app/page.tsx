import { AboutTonight } from "@/components/AboutTonight";
import { Guestbook } from "@/components/Guestbook";
import { Hero } from "@/components/Hero";
import { Memories } from "@/components/Memories";
import { Playlist } from "@/components/Playlist";
import { SiteNav } from "@/components/SiteNav";
import { Surprise } from "@/components/Surprise";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="relative z-10">
        <Hero />
        <AboutTonight />
        <Memories />
        <Guestbook />
        {/* <Playlist /> */}
        <Surprise />
      </main>
    </>
  );
}
