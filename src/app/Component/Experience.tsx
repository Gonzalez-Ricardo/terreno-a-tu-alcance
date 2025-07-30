"use client";

import React from "react";
import CountUp from "react-countup";

export default function Experience() {
  const stats = [
    { value: 298, suffix: "+", label: "Casas Construidas" },
    { value: 5, suffix: "+", label: "Años de Experiencia" },
    { value: 420, suffix: "+", label: "Muebles Fabricados" },
    { value: 98, suffix: "%", label: "Clientes Satisfechos" },
  ];

  return (
    <section className="bg-[#006837] text-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
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
