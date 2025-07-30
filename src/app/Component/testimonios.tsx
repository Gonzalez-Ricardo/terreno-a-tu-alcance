import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, CheckCircle, Users } from "lucide-react";

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="py-20 bg-gradient-to-br bg-[#006837] text-white relative overflow-hidden overflow-x-hidden"
    >
      {/* Elementos decorativos en segundo plano */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-[#6DBE45] text-white mb-4 text-sm">
            Testimonios
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación. Cada testimonio refleja nuestro compromiso con la
            excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Luis Herrera",
              role: "Cliente Particular",
              content:
                "El proyecto se entregó antes de lo previsto y con una calidad excelente. Muy recomendados.",
              rating: 5,
            },
            {
              name: "Verónica Pérez",
              role: "Cliente Comercial",
              content:
                "Desde el primer contacto nos dieron confianza. Cumplieron todo con profesionalismo.",
              rating: 5,
            },
            {
              name: "José Ramírez",
              role: "Representante",
              content:
                "Gran trabajo en pavimentación. Nuestro acceso quedó mucho más seguro y moderno.",
              rating: 5,
            },
            {
              name: "Laura Morales",
              role: "Cliente Particular",
              content:
                "Muy agradecida con el equipo. Atendieron cada detalle de la obra, superaron mis expectativas",
              rating: 5,
            },
            {
              name: "Don Rubén Solís",
              role: "Cliente Particular",
              content:
                "Gracias al nuevo puente ahora podemos cruzar con seguridad todo el año. ¡Gracias!",
              rating: 5,
            },
            {
              name: "Sofía Jiménez",
              role: "Encargada de obra comunitaria",
              content:
                "Realizaron un excelente drenaje sanitario. Rápidos, limpios y responsables.",
              rating: 5,
            },
            {
              name: "Maestra Gabriela León",
              role: "Docente en Primaria",
              content:
                "El aula quedó perfecta para nuestros estudiantes. Buena ventilación y acabados impecables.",
              rating: 5,
            },
            {
              name: "Carlos Méndez",
              role: "Supervisor de Obra",
              content:
                "Se nota que tienen experiencia en el ramo. Todo el proceso fue muy transparente.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 group max-w-full relative"
            >
              <CardContent className="p-8">
                <div className="flex mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-400 fill-current mr-1"
                    />
                  ))}
                </div>
                <div className="relative mb-6">
                  <div className="text-6xl text-white absolute -top-4 -left-2 font-serif">
                    &quot;
                  </div>
                  <p className="text-gray-200 leading-relaxed italic text-lg relative z-10 pl-6">
                    {testimonial.content}
                  </p>
                  <div className="text-6xl text-white absolute -bottom-8 -right-2 font-serif rotate-180">
                    &quot;
                  </div>
                </div>
                <div className="flex items-center mt-8">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#6DBE45] rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-[#6DBE45] rounded-full p-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-green-500 text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
              4.9/5
            </div>
            <p className="text-gray-300 text-sm">Calificación Promedio</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
              250+
            </div>
            <p className="text-gray-300 text-sm">Clientes Satisfechos</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
              98%
            </div>
            <p className="text-gray-300 text-sm">Recomendación</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
              5+
            </div>
            <p className="text-gray-300 text-sm">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}