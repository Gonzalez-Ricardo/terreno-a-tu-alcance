import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hammer, Home, Sofa, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="servicios" className="py-12 md:py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 py-9">
        <div className="text-center mb-12 md:mb-16 px-4">
          <Badge className="bg-[#6DBE45] font-bold text-white mb-4 text-xs md:text-sm">
            Nuestros Servicios
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Construcción y Inmobiliario de Calidad
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios integrales desde la construcción de tu hogar
            hasta el mobiliario personalizado que lo hará único.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Tarjeta 1 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg max-w-full">
            <CardContent className="p-8 text-center">
              <div className="bg-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#006837] transition-colors">
                <Home className="h-8 w-8 text-white group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                Construcción Residencial
              </h3>
              <p className="text-gray-600 mb-6">
                Casas unifamiliares, duplex y condominios con estilo
                arquitectónico americano tradicional.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Diseño arquitectónico
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Construcción completa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Acabados premium
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Tarjeta 2 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg max-w-full">
            <CardContent className="p-8 text-center">
              <div className="bg-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#006837] transition-colors">
                <Sofa className="h-8 w-8 text-white group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                Inmobiliario Personalizado
              </h3>
              <p className="text-gray-600 mb-6">
                Muebles hechos a medida con maderas nobles y diseños que
                complementan tu hogar.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cocinas integrales
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Closets y vestidores
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Muebles de sala y comedor
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Tarjeta 3 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg max-w-full">
            <CardContent className="p-8 text-center">
              <div className="bg-[#6DBE45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#006837] transition-colors">
                <Hammer className="h-8 w-8 text-white group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                Remodelaciones
              </h3>
              <p className="text-gray-600 mb-6">
                Renovamos y modernizamos tu hogar manteniendo el encanto del
                estilo americano.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Remodelación integral
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Ampliaciones
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Restauración
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
