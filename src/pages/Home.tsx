import HeroSlider from "../components/HeroSlider";
import HomePageProducts from "../components/HomePageProducts";
import HomeShopNow from "../components/HomeShopNow";
import MyServices from "../components/MyServices";
import PromotionalProducts from "../components/PromotionalProducts";
import PromotionalProducts2 from "../components/PromotionalProducts2";

export default function Home() {
  return (
    <div className="h-auto">
        <HeroSlider />
        <PromotionalProducts/>
        <HomePageProducts/>
        <HomeShopNow/>
        <PromotionalProducts2/>
        <MyServices/>
    </div>
  )
}
