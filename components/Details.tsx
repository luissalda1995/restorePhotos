import Image from "next/image";
import Link from "next/link";

export function Details() {
    return (
        <section
        id='details'
        aria-label='Detalles'
        className='py-10'>
            <div className="bg-gray-100 py-12 px-6 md:px-16">
            {/* Sección 1 */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                <Image
                    src="/Mejorar-una-foto-antigua.webp"
                    alt="Before"
                    width={475}
                    height={475}
                />
                </div>
                <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Restaurador de Fotos Antiguas AI</h2>
                <p className="text-gray-700 mb-6">
                    Restaura tus fotos antiguas en segundos con nuestra tecnología de
                    inteligencia artificial. Sube tu imagen y deja que nuestro sistema
                    haga la magia.
                </p>
                </div>
            </div>
            
            {/* Sección 2 */}
            <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-8 items-center">
                <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Revivir tus recuerdos especiales</h2>
                <p className="text-gray-700 mb-6">
                    Cada foto es un tesoro. Con nuestra tecnología avanzada, podemos
                    eliminar manchas y mejorar la calidad sin esfuerzo. Obtén fotos de
                    alta resolución para más historias familiares.
                </p>
                <Link
                    className='bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80'
                    href='/restore'
                >
                    Restaurar foto ahora
                </Link>
                </div>
                <div className="relative">
                <Image
                    src="/restaura-foto-vieja.png"
                    alt="Before"
                    width={475}
                    height={475} 
                />
                </div>
            </div>
            </div>
        </section>
    )
    
}