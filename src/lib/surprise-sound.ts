const SURPRISE_SOUND_SRC = "/sounds/ilu.mp3";

let audio: HTMLAudioElement | null = null;

export function playSurpriseSound() {
  try {
    if (typeof window === "undefined") return;

    if (!audio) {
      audio = new Audio(SURPRISE_SOUND_SRC);
      audio.volume = 0.85;
    }

    audio.currentTime = 0;
    void audio.play();
  } catch {
    /* audio optional */
  }
}
