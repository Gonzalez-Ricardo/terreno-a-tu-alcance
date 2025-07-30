"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import imagen1 from "../../../public/Images/29.webp";
import imagen2 from "../../../public/Images/14.webp";
import imagen3 from "../../../public/Images/21.webp";
import imagen4 from "../../../public/Images/10.webp";
import imagen5 from "../../../public/Images/20.webp";
import imagen6 from "../../../public/Images/42.webp";
import imagen7 from "../../../public/Images/43.webp";

const proyectos = [
  {
    title: "Montaje de Puente Colgante",
    image: imagen1,
    description_c: ["Infraestructura para cruce peatonal sobre río."],
    description_m: [
      "Desarrollo de puente colgante con cimentación en concreto armado y cableado estructural para tránsito peatonal. Este proyecto permite la comunicación segura entre dos comunidades aisladas por una corriente fluvial.",
    ],
    fecha: "Agosto 2023",
  },
  {
    title: "Obra de Drenaje Sanitario",
    image: imagen2,
    description_c: ["Colocación de tubería en zanja para drenaje profundo."],
    description_m: [
      "Excavación y colocación de tubería de alta resistencia para sistema de drenaje sanitario en zona urbana. Se cuidó la pendiente y compactación del relleno para asegurar un flujo eficiente y prevenir colapsos.",
    ],
    fecha: "Noviembre 2023",
  },
  {
    title: "Instalación de Techumbre Metálica",
    image: imagen3,
    description_c: ["Colocación estructural de cubierta con apoyo de grúa."],
    description_m: [
      "Montaje de techumbre metálica para espacio comunitario multiusos. Se utilizaron perfiles PTR y lámina galvanizada, con maniobras técnicas controladas por maquinaria pesada para garantizar seguridad estructural y durabilidad.",
    ],
    fecha: "Enero 2024",
  },
  {
    title: "Pavimentación con Concreto Hidráulico",
    image: imagen4,
    description_c: ["Vaciado y nivelación de concreto en camino vecinal."],
    description_m: [
      "Colocación de concreto hidráulico en camino rural para mejorar la resistencia al desgaste y facilitar el tránsito. El equipo ejecutó el vaciado con precisión utilizando herramientas de nivelación manual y encofrado lateral.",
    ],
    fecha: "Marzo 2024",
  },
  {
    title: "Levantamiento Topográfico",
    image: imagen5,
    description_c: ["Estudio topográfico con estación total en camino rural."],
    description_m: [
      "Realización de levantamiento topográfico con estación total para la planificación de obra vial. Esta etapa fue clave para el diseño geométrico del proyecto, determinando pendientes, curvas y niveles del terreno antes de la intervención.",
    ],
    fecha: "Abril 2024",
  },
  {
    title: "Colocación de Señalamiento Vial",
    image: imagen6,
    description_c: ["Instalación de defensas metálicas y señalización en carretera."],
    description_m: [
      "Proyecto de seguridad vial mediante la colocación de defensas metálicas tipo “guarda rayos” y señalética horizontal y vertical. Esta etapa garantiza la seguridad del tránsito en zonas de curvas pronunciadas y áreas de alto riesgo, cumpliendo con la normatividad vigente.",
    ],
    fecha: "Abril 2024",
  },
  {
    title: "Rehabilitación de Carretera Rural",
    image: imagen7,
    description_c: ["Pavimentación de tramo carretero con señalamientos y acabados."],
    description_m: [
      "Proyecto de rehabilitación de camino rural mediante pavimentación asfáltica, delimitación de carriles, colocación de postes reflectantes y limpieza del derecho de vía. Se mejoró la conectividad entre comunidades, reduciendo tiempos de traslado y aumentando la seguridad vial.",
    ],
    fecha: "Mayo 2024",
  },
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="proyectos" className="py-12 md:py-20">
      <div className="container mx-auto px-4 py-9">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-[#6DBE45] text-white mb-4 text-xs md:text-sm">
            Nuestros Proyectos
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 px-4">
            Galería de Trabajos Realizados
          </h2>
          <p className="text-base md:text-xl text-gray-600 px-4">
            Cada proyecto refleja nuestro compromiso con la excelencia y el
            estilo de vida moderno.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {proyectos.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Proyecto ${item.title}`}
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    className="bg-white text-slate-900 hover:bg-gray-100 text-sm md:text-base"
                    onClick={() => setSelectedProject(item)}
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {item.description_c.join(" ")}
                </p>
                <div className="flex items-center text-xs md:text-sm text-gray-500">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                  {item.fecha}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <Badge className="bg-[#6DBE45] text-white mb-2">Proyecto destacado</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{selectedProject.title}</h2>
                <p className="text-gray-500 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Completado en {selectedProject.fecha}
                </p>
              </div>
              <div className="prose max-w-none">
                {selectedProject.description_m.map((desc, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">{desc}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setSelectedProject(null)}>
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
