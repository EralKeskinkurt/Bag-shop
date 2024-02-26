import Navbar from "../components/ui/Navbar";
import { useState, useEffect, useRef } from "react"
import Footer from "../components/ui/Footer";
interface Props {
  children: React.ReactNode
}

export default function Default({ children }: Props) {

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [current, setCurrent] = useState<number>()


  const ref = useRef()
  
  useEffect(() => {
    const handleScroll = () => {
      const layout = document.getElementById("layout-default")
      const currentScroll = window.pageYOffset || layout?.scrollTop
      setCurrent(window.pageYOffset || layout?.scrollTop)
      if(!currentScroll) return;

      setPrevScrollPos(currentScroll)

      if (currentScroll < 0) {
        return
      }

      const isVisible = currentScroll < prevScrollPos
      
      setIsNavbarVisible(isVisible)
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div id="layout-default" className="min-h-screen w-full overflow-auto bg-[#fff]">
      <Navbar isNavbarVisible={isNavbarVisible} currentScrollPos={current || 0} />
      {children}
      <Footer />
    </div>
  )
}
