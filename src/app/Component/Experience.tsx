"use client";

import React from "react";
import CountUp from "react-countup";

export default function Experience() {
  const stats = [
    { value: 298, suffix: "+", label: "Casas Construidas" },
    { value: 5, suffix: "+", label: "Años de Experiencia" },
    { value: 420, suffix: "+", label: "Inmobiliarios Completados" },
    { value: 98, suffix: "%", label: "Clientes Satisfechos" },
  ];

  return (
    <section className="bg-[#006837] text-white py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                <CountUp end={stat.value} duration={2} enableScrollSpy />
                {stat.suffix}
              </div>
              <p className="text-red-100 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
