"use client";
import React from "react";
import { Header } from "./Component/header";
import { Inicio } from "./Component/inicio";
import Experience from "./Component/Experience";
import Servicios from "./Component/Servicios";
import Gallery from "./Component/gallery";
import Testimonios from "./Component/testimonios";
import Contacto from "./Component/contacto";
import Footer from "./Component/footer";
import Nosotros from "./Component/nosotros";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Inicio />
      <Experience />
      <Nosotros />
      <Servicios />
      <Gallery />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}
