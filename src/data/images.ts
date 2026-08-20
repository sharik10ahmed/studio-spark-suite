import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import choreography from "@/assets/choreography.jpg";
import pBollywood from "@/assets/program-bollywood.jpg";
import pHiphop from "@/assets/program-hiphop.jpg";
import pContemporary from "@/assets/program-contemporary.jpg";
import pFreestyle from "@/assets/program-freestyle.jpg";
import pKids from "@/assets/program-kids.jpg";
import pGroup from "@/assets/program-group.jpg";
import fFunctional from "@/assets/fit-functional.jpg";
import fStrength from "@/assets/fit-strength.jpg";
import fMobility from "@/assets/fit-mobility.jpg";
import fDance from "@/assets/fit-dance.jpg";
import fGroup from "@/assets/fit-group.jpg";
import fBeginner from "@/assets/fit-beginner.jpg";
import fConditioning from "@/assets/fit-conditioning.jpg";
import eWedding from "@/assets/event-wedding.jpg";
import eCultural from "@/assets/event-cultural.jpg";
import eCollege from "@/assets/event-college.jpg";
import eCorporate from "@/assets/event-corporate.jpg";
import eCommunity from "@/assets/event-community.jpg";
import g1 from "@/assets/gal-1.jpg";
import g2 from "@/assets/gal-2.jpg";
import g3 from "@/assets/gal-3.jpg";
import g4 from "@/assets/gal-4.jpg";
import g5 from "@/assets/gal-5.jpg";
import g6 from "@/assets/gal-6.jpg";
import g7 from "@/assets/gal-7.jpg";
import g8 from "@/assets/gal-8.jpg";
import g9 from "@/assets/gal-9.jpg";
import g10 from "@/assets/gal-10.jpg";

/**
 * Every visual used on the site is registered here exactly once so that no
 * image is ever reused across sections.
 */
export const IMG = {
  hero,
  about,
  choreography,
  pBollywood,
  pHiphop,
  pContemporary,
  pFreestyle,
  pKids,
  pGroup,
  fFunctional,
  fStrength,
  fMobility,
  fDance,
  fGroup,
  fBeginner,
  fConditioning,
  eWedding,
  eCultural,
  eCollege,
  eCorporate,
  eCommunity,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
} as const;

export type ImageKey = keyof typeof IMG;

export const IMAGE_LIBRARY: { key: ImageKey; label: string }[] = [
  { key: "hero", label: "Hero — crew mid-jump" },
  { key: "about", label: "About — studio coaching" },
  { key: "choreography", label: "Choreography — big stage" },
  { key: "pBollywood", label: "Program — Bollywood" },
  { key: "pHiphop", label: "Program — Hip-Hop" },
  { key: "pContemporary", label: "Program — Contemporary" },
  { key: "pFreestyle", label: "Program — Freestyle" },
  { key: "pKids", label: "Program — Kids" },
  { key: "pGroup", label: "Program — Group formation" },
  { key: "fFunctional", label: "Fitness — Kettlebell" },
  { key: "fStrength", label: "Fitness — Barbell squat" },
  { key: "fMobility", label: "Fitness — Mobility" },
  { key: "fDance", label: "Fitness — Dance fitness" },
  { key: "fGroup", label: "Fitness — Group circuit" },
  { key: "fBeginner", label: "Fitness — Beginner session" },
  { key: "fConditioning", label: "Fitness — Conditioning" },
  { key: "eWedding", label: "Event — Wedding sangeet" },
  { key: "eCultural", label: "Event — Cultural festival" },
  { key: "eCollege", label: "Event — College stage" },
  { key: "eCorporate", label: "Event — Corporate night" },
  { key: "eCommunity", label: "Event — Community square" },
  { key: "g1", label: "Gallery — Silhouette arch" },
  { key: "g2", label: "Gallery — Breakdance freeze" },
  { key: "g3", label: "Gallery — Chalked grip" },
  { key: "g4", label: "Gallery — Mirror rehearsal" },
  { key: "g5", label: "Gallery — Partner lift" },
  { key: "g6", label: "Gallery — Mat circuit" },
  { key: "g7", label: "Gallery — Crew portrait" },
  { key: "g8", label: "Gallery — Feet in motion" },
  { key: "g9", label: "Gallery — Backstage" },
  { key: "g10", label: "Gallery — Cheering crowd" },
];

export const imageSrc = (key: string) => IMG[key as ImageKey] ?? IMG.hero;
