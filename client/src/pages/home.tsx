import { Link } from "wouter";
import logoUrl from "@assets/IMG_1944_1772453843447.jpeg";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  // We use a fallback color just in case, but it will update based on the image
  const [bgColor, setBgColor] = useState<string>("#F5CB72"); 
  const imgRef = useRef<HTMLImageElement>(null);

  // Extract background color dynamically from the top-left pixel
  const extractColor = () => {
    const img = imgRef.current;
    if (!img) return;

    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    try {
      ctx.drawImage(img, 0, 0, img.width, img.height);
      // Get pixel data from a corner (e.g., 5, 5 to avoid anti-aliasing artifacts at the very edge)
      const pixelData = ctx.getImageData(5, 5, 1, 1).data;
      const hex = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
      setBgColor(hex);
    } catch (e) {
      console.error("Could not extract color from image", e);
    }
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-1000 ease-in-out font-sans flex flex-col" 
      style={{ backgroundColor: bgColor }}
    >
      {/* Menu Bar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-black/5 border-b border-black/10 sticky top-0 z-10">
        <div className="flex items-center gap-8">
          <Link href="/">
            <img 
              ref={imgRef}
              src={logoUrl} 
              alt="Gary's Blog Logo" 
              className="h-14 w-auto rounded shadow-sm hover:scale-105 transition-transform cursor-pointer"
              onLoad={extractColor}
              crossOrigin="anonymous" 
            />
          </Link>
          <div className="hidden md:flex gap-8 text-black/70 font-semibold tracking-wide">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/" className="hover:text-black transition-colors">My Students</Link>
            <Link href="/" className="hover:text-black transition-colors">About Gary</Link>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 bg-black/80 hover:bg-black text-white font-medium rounded-full transition-all hover:shadow-lg shadow-black/20">
            Subscribe
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-20 flex flex-col items-center">
        <header className="text-center mb-24 space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black/90 drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            garys.blog
          </h1>
          <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Musings of a teaching assistant navigating the wonderful world of education, featuring my absolute favorite students.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 w-full animate-in slide-in-from-bottom-12 duration-700 fade-in delay-150 fill-mode-both">
          {/* Adam's Card */}
          <Card className="bg-white/40 border-white/20 shadow-2xl shadow-black/5 backdrop-blur-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-black/10 transition-all duration-300 group rounded-3xl">
            <CardContent className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
                  <Avatar className="h-20 w-20 border-4 border-white shadow-md relative">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adam&backgroundColor=b6e3f4" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black/80 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>Adam</h3>
                  <p className="text-black/60 font-semibold tracking-wide uppercase text-sm mt-1">Star Student</p>
                </div>
              </div>
              <p className="text-black/75 leading-relaxed text-lg font-medium">
                Always eager to learn and asks the most insightful questions during our sessions. His dedication to mastering the subject material is truly inspiring to watch! Adam consistently goes above and beyond what is asked of him.
              </p>
            </CardContent>
          </Card>

          {/* George's Card */}
          <Card className="bg-white/40 border-white/20 shadow-2xl shadow-black/5 backdrop-blur-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-black/10 transition-all duration-300 group rounded-3xl">
            <CardContent className="p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
                  <Avatar className="h-20 w-20 border-4 border-white shadow-md relative">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=George&backgroundColor=c0aede" />
                    <AvatarFallback>GE</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black/80 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>George</h3>
                  <p className="text-black/60 font-semibold tracking-wide uppercase text-sm mt-1">Creative Thinker</p>
                </div>
              </div>
              <p className="text-black/75 leading-relaxed text-lg font-medium">
                Brings such a unique perspective to every single problem we tackle. George's ability to think outside the box makes every class an absolute joy to teach. You can always count on him for a brilliant "aha!" moment.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-24 text-center pb-10">
           <div className="w-16 h-1 bg-black/10 mx-auto mb-8 rounded-full"></div>
           <p className="text-black/50 font-medium italic text-lg font-serif">More stories coming soon...</p>
        </div>
      </main>
    </div>
  );
}