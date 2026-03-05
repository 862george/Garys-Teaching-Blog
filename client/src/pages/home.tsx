import { Link } from "wouter";
import logoUrl from "@assets/IMG_1949_1772693894306.jpeg";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  // Use the exact color from the logo background
  const bgColor = "#F5CB72"; 
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div 
      className="min-h-screen font-sans flex flex-col" 
      style={{ backgroundColor: bgColor }}
    >
      {/* Floating Menu Bar */}
      <div className="sticky top-6 z-50 w-full px-6 flex justify-center">
        <nav className="flex items-center justify-between w-full max-w-5xl px-6 md:px-10 py-3 backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl shadow-black/5 rounded-full">
          <div className="flex items-center gap-8">
            <Link href="/">
              <img 
                ref={imgRef}
                src={logoUrl} 
                alt="Gary's Blog Logo" 
                className="h-12 w-auto hover:scale-105 transition-transform cursor-pointer mix-blend-multiply rounded-xl"
                crossOrigin="anonymous" 
              />
            </Link>
            <div className="hidden md:flex gap-8 text-black/70 font-bold tracking-tight text-sm uppercase">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <Link href="/" className="hover:text-black transition-colors">My Students</Link>
              <Link href="/" className="hover:text-black transition-colors">About Gary</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-20 flex flex-col items-center">
        <header className="text-center mb-24 space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black/90 drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gary's blog
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