import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
export default function HomeShopNow() {
 

    const starCount = [1, 2, 3, 4, 5];
    
    const calculateTimeLeft = () => {
        const endDate = '2025-01-01'
        
        const difference = new Date(endDate).getTime() - new Date().getTime();
        let timeLeft:{
            days:number;
            hours:number;
            minutes:number;
            seconds: number;
        } = {
            days:0,
            hours:0,
            minutes:0,
            seconds: 0,
        }
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        }
    
        
        return timeLeft
    };
    
      const [daysDifference, setDaysDifference] = useState<number>(calculateTimeLeft()?.days);
      const [hoursDifference, setHoursDifference] = useState<number>(calculateTimeLeft()?.hours);
      const [minutesDifference, setMinutesDifference] = useState<number>(calculateTimeLeft()?.minutes);
      const [secondsDifference, setSecondsDifference] = useState<number>(calculateTimeLeft()?.seconds);
    
      useEffect(() => {
        const timer = setTimeout(() => {
            setDaysDifference(calculateTimeLeft().days);
            setHoursDifference(calculateTimeLeft().hours);
            setMinutesDifference(calculateTimeLeft().minutes);
            setSecondsDifference(calculateTimeLeft().seconds);
        }, 1000);
    
        return () => clearTimeout(timer);
      });

    return (
        <section className="w-full">
            <div className="container w-full px-56 max-sm:px-10 py-20 flex flex-wrap gap-28 items-start">
                <div className="flex w-auto flex-wrap items-center gap-14">
                    <figure className="relative">
                        <img className="z-20 object-cover" src="https://htmldemo.net/payne/payne/assets/img/products/product-11-321x450.png" alt="Shop now product" />
                        <h1 className="-rotate-90 text-gray-300/70 font-semibold text-[4.5rem] max-sm:text-[2.5rem] absolute z-10 max-sm:-left-28 -left-56 max-sm:top-32 top-44">BACKPACK</h1>
                    </figure>
                    <div className="flex flex-col max-sm:flex-row items-center justify-start gap-7">
                        <figure>
                            <img src="https://htmldemo.net/payne/payne/assets/img/products/product-11-123x127.jpg" alt="Shop now product" />
                        </figure>
                        <figure>
                            <img src="https://htmldemo.net/payne/payne/assets/img/products/product-12-123x127.jpg" alt="Shop now product" />
                        </figure>
                        <figure>
                            <img src="https://htmldemo.net/payne/payne/assets/img/products/product-13-123x127.jpg" alt="Shop now product" />
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-8">
                    <div className="flex flex-col gap-3 items-start">
                        <h2 className="text-4xl font-semibold">BLINGO BACKPACK</h2>
                        <p className="text-[0.9rem]">Neque porro quisquam est, qui dolorem ipsum quia dolor <br /> ipisci velit, sed quia non numquam eius modi</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="text-4xl">162.00 $</span>
                        <div className="flex items-center gap-1">
                            {starCount.map((a, i) => {
                                return (
                                    <FaStar key={i} size={11} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="text-[0.9rem] font-semibold">BEST DEAL, LIMITED TIME OFFER GET YOUR’S NOW!</div>
                    <div className="flex item-center justify-between w-full">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-medium">{daysDifference}</span>
                            <span className="text-lg">Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-medium">{hoursDifference}</span>
                            <span className="text-lg">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-medium">{minutesDifference}</span>
                            <span className="text-lg">Minutes</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-medium">{secondsDifference}</span>
                            <span className="text-lg">Second</span>
                        </div>
                    </div>
                    <button className={`text-2xl underline hover:text-purple-950 transition-all underline-offset-8`}>Shop Now</button>
                </div>
            </div>
        </section>
    )
}
