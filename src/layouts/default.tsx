import Navbar from "../components/ui/Navbar"
import Footer from "../components/ui/Footer"
interface Props {
    children: React.ReactNode
}

export default function Default({children}:Props) {
  return (
    <div className="h-screen w-full overflow-auto bg-[#fff]">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
