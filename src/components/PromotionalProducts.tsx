import { useInView } from 'react-intersection-observer';
export default function PromotionalProducts() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });

    return (
        <section  id="promotional-products" className="w-full">
            <div className="w-full container flex flex-wrap gap-10 items-center py-32 px-20 justify-evenly">
                <figure ref={ref} className="relative">
                    <img src="https://htmldemo.net/payne/payne/assets/img/products/product-01-500x466.jpg" alt="Featured Product" />
                    <div className={`absolute top-8 max-sm:top-3 text-center w-full ${inView ? 'animate__animated animate__backInLeft' : ''}`}>
                        <h3 className="text-[1.1rem] max-sm:text-[0.8rem]">AMAZING PRODUCT!</h3>
                        <h2 className="text-[2.8rem] max-sm:text-[1.7rem] font-semibold">BISCO BAG</h2>
                    </div>
                </figure>
                
                <figure ref={ref} className="relative">
                    <img src="https://htmldemo.net/payne/payne/assets/img/products/product-02-500x575.jpg" alt="Featured Product" />
                    <div className="absolute -rotate-90 bottom-32 max-sm:bottom-16 -left-10 text-start">
                        <h3 className={`text-[1.1rem] max-sm:text-[0.8rem] ${inView ? 'animate__animated animate__bounceInRight': ''}`}>SPECIAL OFFER <b>39%</b> OFF</h3>
                        <h2 className={`text-[2.8rem] max-sm:text-[1.7rem] ${inView ? 'animate__animated animate__bounceInRight': ''} font-semibold`}>FEEDO BAG</h2>
                    </div>
                </figure>
            </div>
        </section>
    )
}
