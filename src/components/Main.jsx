import React from "react";
import lebron from "../assets/img/lebron.jpg";
import lebron2 from "../assets/img/lebron2.jpg";

 function Main() {
    return (
        <div>
            <section>
                <picture>
                    <source media="(max-width: 640px)" srcSet={lebron}/>
                    <source media="(max-width: 641px)" srcSet={lebron2}/>
                    <img src={lebron2} alt="Lebron James" className="w-[550px] sm:w-auto" /> {/* Aplicamos la clase w-full para hacer que la imagen ocupe todo el ancho en dispositivos pequeños */}
                </picture>
                <div className="sm:flex">
                    <div className="flex-1 py-6">
                        <h2 className="text-[40px] font-bold sm:text-[58px] leading-none">¿Dónde jugará LeBron en 2025?</h2>
                    </div>
                    <div className="flex-1 pt-9">
                        <p className="text-[13px] mb-10 sm:text-[15px]">
                            La incertidumbre sobre dónde jugará LeBron James la próxima temporada se debe a varios factores: su actual contrato con los Lakers, la competitividad del equipo, su deseo de jugar con su hijo Bronny cuando llegue a la NBA, su salud y rendimiento, y los constantes rumores en los medios. Aunque sigue bajo contrato con los Lakers, las decisiones futuras de LeBron podrían depender de cómo evolucione cada uno de estos factores, manteniendo así la expectación sobre su próximo destino.
                        </p>
                        <button className="bg-red-600 w-[185px] h-[48px] uppercase text-white hover:bg-gray-900 mb-5">Leer más</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
