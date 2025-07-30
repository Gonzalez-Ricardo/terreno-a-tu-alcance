"use client";

import Image from "next/image";
import {
  Users,
  Award,
  CheckCircle,
  Calendar,
  Hammer,
  Star,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-12 md:py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 py-9">
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="bg-[#6DBE45] text-white mb-4 text-xs md:text-sm">
              Sobre Nosotros
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 px-4">
              ¿Quiénes Somos?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-6">
                Desde nuestra fundación en 2019, en Soluciones Integrales S.A.
                de C.V. hemos construido más que casas: hemos edificado
                confianza, seguridad y bienestar para decenas de familias y
                empresas que buscan calidad en cada detalle.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                Somos una empresa mexicana dedicada a la construcción
                residencial y fabricación de mobiliario personalizado, con un
                enfoque en proyectos funcionales, estéticos y duraderos. Nuestro
                equipo combina la experiencia técnica con un trato humano,
                cercano y comprometido con tus ideas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <div className="bg-[#6DBE45] w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      Certificación Premium
                    </p>
                    <p className="text-gray-600 text-sm">
                      Constructores licenciados
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#6DBE45] w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Equipo Experto</p>
                    <p className="text-gray-600 text-sm">
                      5+ años de experiencia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
                <Image
                  src="/Images/40.webp"
                  alt=""
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#6DBE45] p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">5+</p>
                    <p className="text-sm text-white">Años de Tradición</p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-[#6DBE45] text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold">200+</p>
                    <p className="text-sm">Proyectos Completados</p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformar espacios en hogares y sueños en realidades,
                ofreciendo soluciones integrales de construcción y mobiliario
                con altos estándares de calidad, puntualidad y profesionalismo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser una empresa líder en el Bajío en soluciones habitacionales y
                diseño interior, reconocida por su excelencia, innovación y
                compromiso con cada cliente.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Diferenciadores */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              ¿Qué nos diferencia?
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: "Calidad Premium",
                desc: "Materiales de alta calidad y acabados profesionales",
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: "Equipo Experto",
                desc: "Trato personalizado en cada etapa del proyecto",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                title: "Garantía Total",
                desc: "Diseños a medida y Inmobiliario  hechos por expertos",
              },
              {
                icon: <Calendar className="h-8 w-8 text-white" />,
                title: "Puntualidad",
                desc: "Cumplimos tiempos de entrega y presupuesto acordado",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 overflow-hidden">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
            Nuestros Valores
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los principios que guían cada proyecto y definen nuestra identidad
            como empresa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <CheckCircle className="h-8 w-8 text-white" />,
              title: "Integridad",
              desc: "Actuamos con honestidad y transparencia en cada proyecto y relación comercial.",
            },
            {
              icon: <Star className="h-8 w-8 text-white" />,
              title: "Excelencia",
              desc: "Buscamos la perfección en cada detalle, desde el diseño hasta la entrega final.",
            },
            {
              icon: <Users className="h-8 w-8 text-white" />,
              title: "Responsabilidad",
              desc: "Cumplimos nuestros compromisos y asumimos la responsabilidad de nuestro trabajo.",
            },
            {
              icon: <Award className="h-8 w-8 text-white" />,
              title: "Innovación",
              desc: "Incorporamos las últimas tecnologías y tendencias en construcción y diseño.",
            },
            {
              icon: <Heart className="h-8 w-8 text-white" />,
              title: "Compromiso",
              desc: "Nos dedicamos completamente a hacer realidad la visión de cada cliente.",
            },
            {
              icon: <Hammer className="h-8 w-8 text-white" />,
              title: "Artesanía",
              desc: "Valoramos el trabajo manual de calidad y la atención a los detalles tradicionales.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#006837] transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-3 text-slate-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
