import { Hammer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#006837] text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className=" md:pt-2 text-center text-gray-300 text-sm md:text-base">
          <p>
            &copy; 2025 SOLUCIONES INTEGRALES S.A. DE C.V. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
