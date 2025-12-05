import About from "@/components/About";
import { Footer }from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Header/>
    <About/>
    <Footer/>
  </div>
  );
}
