import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ResourceHihglight from "@/components/ResourceHihglight";
import ResourceList from "@/components/ResourceList";

function Home() {

  return (
    <>
      <Navbar />
      <ResourceHihglight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </>
  )
}


export default Home;