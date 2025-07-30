import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Contacto() {
  const [state, handleSubmit] = useForm("xvgqryyp");

  if (state.succeeded) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-green-600 mb-4">
          ¡Gracias por contactarnos!
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Hemos recibido tu solicitud y nos pondremos en contacto contigo lo
          antes posible.
        </p>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-12 md:py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 py-9">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-[#6DBE45] text-white mb-4 text-xs md:text-sm">
            Contacto
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 px-4">
            ¿Listo para Comenzar tu Proyecto?
          </h2>
          <p className="text-base md:text-xl text-gray-600 px-4">
            Contáctanos hoy mismo para una cotización gratuita
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 py-2">
              Información de Contacto
            </h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center">
                <div className="bg-[#006837] p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                <Link href="tel:+52 466 212 6849" passHref>
                  <p className="font-semibold text-slate-900 text-sm md:text-base">
                    Teléfono
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    +52 (466) 212-6849
                  </p>
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#006837] p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div> 
                <Link href="mailto:terrenoatualcance@gmail.com" passHref>
                <div>
                  <p className="font-semibold text-slate-900 text-sm md:text-base">
                    Email
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    terrenoatualcance@gmail.com
                  </p>
                </div>
                </Link>
              </div>

              <div className="flex items-center">
                <div className="bg-[#006837] p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                <Link href="https://wa.link/rdn46b" passHref>
                  <p className="font-semibold text-slate-900 text-sm md:text-base">
                    WhatsApp
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Contactanos por <b>WhatsApp aqui</b> 
                  </p>
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#006837] p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm md:text-base">
                    Dirección
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    León, Gto. México
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-white rounded-lg shadow-lg">
              <h4 className="font-bold text-slate-900 mb-4 text-sm md:text-base">
                Horarios de Atención
              </h4>
              <div className="space-y-1 md:space-y-2 text-gray-600 text-sm md:text-base">
                <p>Lunes - Viernes: 9:00 AM - 5:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <Card id="form" className="shadow-xl w-full max-w-full">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900">
                Solicita tu Cotización
              </h3>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="Nombre"
                      placeholder="Tu nombre completo"
                      className="text-sm md:text-base"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="Telefono"
                      placeholder="Tu número de teléfono"
                      className="text-sm md:text-base"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="Correo"
                    placeholder="tu@email.com"
                    className="text-sm md:text-base"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="proyect" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Proyecto
                  </label>
                  <select
                    id="proyect"
                    name="Proyecto"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                  >
                    <option>Construcción Nueva</option>
                    <option>Remodelación</option>
                    <option>Inmobiliario Personalizado</option>
                    <option>Consultoría</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="Mensaje"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={4}
                    className="text-sm md:text-base"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <Button
                  className="w-full bg-[#006837] hover:bg-[#004d29] text-base md:text-lg py-3"
                  type="submit"
                  disabled={state.submitting}
                >
                  Enviar Solicitud
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
