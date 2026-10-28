"use client";

import Image from "next/image";
import { useState } from "react";
import PhotoModal from "../Components/PhotoModal";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

type PetProfile = {
  name: string;
  species: string;
  role: string;
  bio: string;
  favoriteThing: string;
  signatureMove: string;
  accentBar: string;
  panelTint: string;
  photo: string;
};

type PhotoTile = {
  src: string;
  alt: string;
  shape: "hero" | "wide" | "tall" | "square" | "circle";
};

const petProfiles: PetProfile[] = [
  {
    name: "Potato",
    species: "Couch Potato",
    role: "Snuggle Commander",
    bio: "A bread loaf legend with big curiosity and an even bigger personality.",
    favoriteThing: "Squeeking toys during meetings and licking toes when least expected",
    signatureMove: "Play dead (very dramatically)",
    accentBar: "from-sky-300 to-cyan-300",
    panelTint: "bg-sky-50/70 border-sky-200",
    photo: "/photos/Potato_1.JPEG",
  },
  {
    name: "Mouse",
    species: "Fluffy Void",
    role: "Lap Warmer Extraordinaire",
    bio: "Fast little explorer who turns every corner into an adventure.",
    favoriteThing: "Her reusable Target bag",
    signatureMove: "Post Poo Zoomies",
    accentBar: "from-rose-300 to-violet-300",
    panelTint: "bg-rose-50/70 border-rose-200",
    photo: "/photos/Mouse_1.JPEG",
  },
];

const galleryPhotos: PhotoTile[] = [
  { src: "/photos/SleepyPets.JPEG", alt: "Sleepy pets cuddling", shape: "hero" },
  { src: "/photos/IMG_4194.JPEG", alt: "Bright pet portrait", shape: "wide" },
  { src: "/photos/Mouse_2.JPEG", alt: "Mouse portrait", shape: "circle" },
  { src: "/photos/Potato_3.JPEG", alt: "Potato peeking", shape: "tall" },
  { src: "/photos/Mouse_3.JPEG", alt: "Mouse exploring", shape: "tall" },
  { src: "/photos/IMG_3240.JPEG", alt: "Pet candid moment", shape: "wide" },
  { src: "/photos/Potato_4.JPEG", alt: "Potato resting", shape: "square" },
  { src: "/photos/Potato_2.JPEG", alt: "Potato close-up", shape: "square" },
  { src: "/photos/Mouse_4.JPEG", alt: "Mouse looking at camera", shape: "circle" },
  { src: "/photos/Potato_5.JPEG", alt: "Potato in cozy spot", shape: "wide" },
  { src: "/photos/IMG_4142.JPEG", alt: "Playful pet snapshot", shape: "wide" },
  { src: "/photos/Potato_6.JPEG", alt: "Potato side profile", shape: "circle" },
  { src: "/photos/Mouse_5.JPEG", alt: "Mouse relaxing", shape: "tall" },
  { src: "/photos/Potato_7.JPEG", alt: "Potato under soft light", shape: "square" },
  { src: "/photos/Potato_8.JPEG", alt: "Potato final portrait", shape: "circle" },
];

const mobileShapeClasses: Record<PhotoTile["shape"], string> = {
  hero: "col-span-2 aspect-[4/3]",
  wide: "col-span-2 aspect-[16/10]",
  tall: "col-span-1 aspect-[3/4]",
  square: "col-span-1 aspect-square",
  circle: "col-span-1 aspect-square",
};

const desktopSizeClasses: Record<PhotoTile["shape"], string> = {
  hero: "h-64 w-64",
  wide: "h-44 w-72",
  tall: "h-72 w-48",
  square: "h-48 w-48",
  circle: "h-44 w-44",
};

const shapeFrameClasses: Record<PhotoTile["shape"], string> = {
  hero: "rounded-2xl",
  wide: "rounded-2xl",
  tall: "rounded-2xl",
  square: "rounded-2xl",
  circle: "rounded-full",
};

const bubblePositionClasses = [
  "left-[4%] top-[5px] -rotate-6 [animation-delay:0ms]",
  "left-[30%] top-[29px] rotate-3 [animation-delay:0.9s]",
  "left-[59%] top-[12px] -rotate-2 [animation-delay:1.3s]",
  "left-[58%] top-[240px] rotate-6 [animation-delay:0.4s]",
  "left-[80%] top-[24px] -rotate-3 [animation-delay:1.7s]",
  "left-[8%] top-[384px] rotate-4 [animation-delay:0.6s]",
  "left-[34%] top-[270px] -rotate-5 [animation-delay:1.2s]",
  "left-[calc(48%-20px)] top-[480px] rotate-2 [animation-delay:0.2s]",
  "left-[74%] top-[468px] -rotate-4 [animation-delay:1.5s]",
  "left-[4%] top-[620px] rotate-5 [animation-delay:0.8s]",
  "left-[38%] top-[780px] -rotate-2 [animation-delay:1.1s]",
  "left-[52%] top-[620px] rotate-3 [animation-delay:0.5s]",
  "left-[78%] top-[720px] -rotate-6 [animation-delay:1.8s]",
  "left-[20%] top-[900px] rotate-2 [animation-delay:0.7s]",
  "left-[66%] top-[980px] -rotate-1 [animation-delay:1.4s]",
];

// Pet profile photos as PhotoTiles so they appear in the modal alongside gallery photos
const petProfilePhotos: PhotoTile[] = petProfiles.map((pet) => ({
  src: pet.photo,
  alt: `${pet.name} profile`,
  shape: "hero" as const,
}));

// All photos in one list: profile shots first, then gallery
const allModalPhotos: PhotoTile[] = [...petProfilePhotos, ...galleryPhotos];

const bubbleStyleClasses = [
  "border-rose-200 shadow-lg shadow-rose-200/45",
  "border-violet-200 shadow-lg shadow-violet-200/45",
  "border-sky-200 shadow-lg shadow-sky-200/45",
  "border-cyan-200 shadow-lg shadow-cyan-200/45",
  "border-rose-200 shadow-lg shadow-rose-200/45",
  "border-indigo-200 shadow-lg shadow-indigo-200/45",
  "border-sky-200 shadow-lg shadow-sky-200/45",
  "border-violet-200 shadow-lg shadow-violet-200/45",
  "border-cyan-200 shadow-lg shadow-cyan-200/45",
  "border-rose-200 shadow-lg shadow-rose-200/45",
  "border-indigo-200 shadow-lg shadow-indigo-200/45",
  "border-sky-200 shadow-lg shadow-sky-200/45",
  "border-violet-200 shadow-lg shadow-violet-200/45",
  "border-cyan-200 shadow-lg shadow-cyan-200/45",
  "border-rose-200 shadow-lg shadow-rose-200/45",
];

export default function PetsPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openPhotoModal = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closePhotoModal = () => {
    setSelectedPhotoIndex(null);
  };

  const showPreviousPhoto = () => {
    setSelectedPhotoIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex - 1 + allModalPhotos.length) % allModalPhotos.length;
    });
  };

  const showNextPhoto = () => {
    setSelectedPhotoIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex + 1) % allModalPhotos.length;
    });
  };

  return (
    <div className="relative isolate overflow-hidden bg-linear-to-b from-pink-50 via-blue-50 to-violet-50 text-indigo-950">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_10px,rgba(67,56,202,0.08)_11px)]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl floating-blob" />
        <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl floating-blob [animation-delay:1.8s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-300/35 blur-3xl floating-blob [animation-delay:0.8s]" />
        <div className="absolute -left-10 top-16 h-72 w-72 rounded-[3rem] border border-rose-200/70 bg-white/40" />
        <div className="absolute right-10 top-24 h-44 w-44 rotate-12 rounded-3xl border border-sky-200/80 bg-sky-100/50" />
        <div className="absolute bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-cyan-200/80 bg-cyan-100/40" />
      </div>

      <Header />

      <main className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <section className="stagger-fade py-10 [--stagger:1] md:py-16">
          <p className="inline-flex rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 backdrop-blur">
            My Beloved Pets
          </p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-tight md:text-6xl">
            The Cutest Members of&nbsp;My Family
          </h1>
          <p className="mt-4 max-w-xl text-lg text-indigo-800/85">
            A little gallery dedicated to the furriest, scaliest, and most lovable
            creatures that share my life.
          </p>
        </section>

        <section className="grid gap-6 pb-12 md:grid-cols-2">
          {petProfiles.map((pet, index) => (
            <article
              key={pet.name}
              className="stagger-fade overflow-hidden rounded-3xl border border-violet-100 bg-white/90 shadow-lg shadow-violet-200/35"
              style={{ ["--stagger" as string]: String(index + 2) }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  onClick={() => openPhotoModal(index)}
                  src={pet.photo}
                  alt={pet.name}
                  fill
                  className="cursor-pointer object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className={`rounded-2xl border p-3 ${pet.panelTint}`}>
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-violet-600">
                    {pet.species}
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-indigo-950">
                    {pet.name}
                  </h2>
                  <p className="text-sm font-semibold text-indigo-700/90">{pet.role}</p>
                  <div className={`mt-3 h-1.5 w-24 rounded-full bg-linear-to-r ${pet.accentBar}`} />
                </div>

                <div className="grid gap-3 text-sm text-indigo-800/90">
                  <p>{pet.bio}</p>
                  <p>
                    <span className="font-bold text-indigo-950">Favorite:</span> {pet.favoriteThing}
                  </p>
                  <p>
                    <span className="font-bold text-indigo-950">Signature move:</span> {pet.signatureMove}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="stagger-fade [--stagger:4]">
          <div className="mb-5 flex items-end justify-between gap-3">
            <h2 className="text-3xl font-black md:text-4xl">Photo Quest Log</h2>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-600">
              15 snapshots
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:hidden">
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Open ${photo.alt}`}
                onClick={() => openPhotoModal(petProfiles.length + index)}
                className={`stagger-fade group relative overflow-hidden border bg-white/90 text-left ${mobileShapeClasses[photo.shape]} ${shapeFrameClasses[photo.shape]} ${bubbleStyleClasses[index]}`}
                style={{ ["--stagger" as string]: String(index + 5) }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>

          <div className="relative hidden h-295 md:block">
            {galleryPhotos.map((photo, index) => (
              <button
                key={`${photo.src}-bubble`}
                type="button"
                aria-label={`Open ${photo.alt}`}
                onClick={() => openPhotoModal(petProfiles.length + index)}
                className={`stagger-fade floating-blob group absolute overflow-hidden border bg-white/90 text-left ${desktopSizeClasses[photo.shape]} ${shapeFrameClasses[photo.shape]} ${bubblePositionClasses[index]} ${bubbleStyleClasses[index]}`}
                style={{ ["--stagger" as string]: String(index + 5) }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 33vw, 280px"
                />
              </button>
            ))}
          </div>
        </section>
      </main>

      <PhotoModal
        isOpen={selectedPhotoIndex !== null}
        imageSrc={selectedPhotoIndex !== null ? allModalPhotos[selectedPhotoIndex].src : ""}
        imageAlt={selectedPhotoIndex !== null ? allModalPhotos[selectedPhotoIndex].alt : "Pet photo"}
        onPrev={showPreviousPhoto}
        onNext={showNextPhoto}
        onClose={closePhotoModal}
      />

      <Footer />
    </div>
  );
}
