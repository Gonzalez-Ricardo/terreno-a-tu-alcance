"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#006837] text-white sticky top-0 z-50 overflow-x-hidden">
      <div className="container mx-auto px-4 overflow-x-hidden">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Image
              src="/Images/Logo.PNG"
              alt="Logo"
              width={60}
              height={60}
              className="w-12 h-auto md:w-16"
              priority
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold">
                SOLUCIONES INTEGRALES
              </h1>
              <p className="text-xs md:text-sm text-gray-300 hidden sm:block">
                S.A. DE C.V.
              </p>
            </div>
          </div>

          {/* Botón del menú (móvil) */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>

          {/* Navegación (escritorio) */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="hover:text-[#58fa20] transition-colors">
              Inicio
            </Link>
            <Link href="#nosotros" className="hover:text-[#58fa20] transition-colors">
              Nosotros
            </Link>
            <Link href="#servicios" className="hover:text-[#58fa20] transition-colors">
              Servicios
            </Link>
            <Link href="#proyectos" className="hover:text-[#58fa20] transition-colors">
              Proyectos
            </Link>
            <Link href="#testimonios" className="hover:text-[#58fa20] transition-colors">
              Testimonios
            </Link>
            <Link href="#contacto" className="hover:text-[#58fa20] transition-colors">
              Contacto
            </Link>
          </nav>

          <Button className="hidden md:block bg-[#6DBE45] hover:bg-[#58fa20]">
            <a href="#contacto"><b>Cotización Gratis</b></a>
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#006837] border-t border-slate-700">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {["inicio", "nosotros", "servicios", "proyectos", "testimonios", "contacto"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className="text-white hover:text-[#58fa20] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
              <Button
                className="bg-[#6DBE45] hover:bg-[#58fa20] mt-4 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="#form">Cotización Gratis</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
