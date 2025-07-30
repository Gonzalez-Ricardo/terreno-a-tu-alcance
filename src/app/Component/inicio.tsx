import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight, Phone, Award, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Inicio() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-r bg-[#6DBE45] text-white py-12 md:py-24 overflow-x-hidden"
    >
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 py-9 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="bg-[#006837] text-white mb-4 text-xs md:text-sm">
              +5 años de experiencia
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Construimos tu
              <span className="text-[#006837]"> Futuro </span>
            </h1>
            <p className="text-base md:text-xl text-white mb-6 md:mb-8 leading-relaxed px-4 lg:px-0">
              En Soluciones Integrales, llevamos más de 5 años transformando ideas en espacios reales. Somos una empresa 100% mexicana especializada en construcción residencial y mobiliario personalizado, comprometidos con la calidad, el diseño y la funcionalidad.
              Desde el primer trazo hasta el último detalle de decoración, construimos el futuro de tu patrimonio con profesionalismo, confianza y pasión.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 px-4 lg:px-0">
              <Button
                onClick={() => {
                  const proyectos = document.getElementById("proyectos");
                  if (proyectos) {
                    proyectos.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                size="lg"
                className="bg-[#006837] hover:bg-[#006010] text-base md:text-lg px-6 md:px-8 py-3"
              >
                Ver Proyectos
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Link href="tel:+52 466 212 6849" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-base md:text-lg px-6 md:px-8 py-3 bg-transparent"
                >
                  Llamar Ahora
                  <Phone className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Link href="https://wa.link/rdn46b" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-[#48e965] hover:text-slate-900 text-base md:text-lg px-6 md:px-8 py-3 bg-transparent"
                >
                  WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
              <Image
                src="/Images/43.webp"
                alt="Casa americana en construcción"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white text-slate-900 p-4 md:p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <Award className="h-8 w-8 md:h-12 md:w-12 text-[#006837]" />
                  <div>
                    <p className="font-bold text-sm md:text-lg">Certificados</p>
                    <p className="text-gray-600 text-xs md:text-base">Construcción Premium</p>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
