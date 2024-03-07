import { useInView } from 'react-intersection-observer';
export default function PromotionalProducts() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    return (
        <section id="promotional-products-2" className="w-full">
            <div className="w-full container flex flex-wrap gap-10 items-center py-32 px-20 justify-evenly">
                <figure ref={ref} className="relative">
                    <img src="https://htmldemo.net/payne/payne/assets/img/products/product-14-500x575.jpg" alt="Featured Product" />
                    <span className='absolute top-16 left-20 max-sm:left-10 max-sm:top-12 -rotate-45 max-sm:w-[70px] max-sm:h-[70px] my-font bg-gray-800 text-white flex flex-col items-center justify-center w-[100px] h-[100px] text-center rounded-full text-2xl'>53% <span className='my-font text-3xl'>OFF</span></span>
                    <div className="absolute -rotate-90 bottom-32 max-sm:bottom-16 -right-10 text-start">
                        <h3 className={`text-[1.1rem] max-sm:text-[0.8rem] ${inView ? 'animate__animated animate__bounceInRight' : ''}`}>SPECIAL OFFER <b>39%</b> OFF</h3>
                        <h2 className={`text-[2.8rem] max-sm:text-[1.7rem] ${inView ? 'animate__animated animate__bounceInRight' : ''} font-semibold`}>FEEDO BAG</h2>
                    </div>
                </figure>
                <figure ref={ref} className="relative">
                    <img src="https://htmldemo.net/payne/payne/assets/img/products/product-15-500x466.jpg" alt="Featured Product" />
                    <span className='absolute bottom-44 right-20 max-sm:w-[70px] max-sm:h-[70px] max-sm:right-5 max-sm:bottom-3 -rotate-45 my-font bg-gray-800 text-white flex flex-col items-center justify-center w-[100px] h-[100px] text-center rounded-full text-2xl'>53% <span className='my-font text-3xl'>OFF</span></span>
                    <div className={`absolute top-8 text-center max-sm:top-4 w-full ${inView ? 'animate__animated animate__backInRight' : ''}`}>
                        <h3 className="text-[1.1rem] max-sm:text-[0.8rem]">MEGA SALE OFFER</h3>
                        <h2 className="text-[2.8rem] max-sm:text-[1.7rem] font-semibold">MAXICA BAG</h2>
                    </div>
                </figure>
            </div>
        </section>
    )
}
