import Layout from "components/Layout";
import Newsletter from "components/Newsletter";
import ResourceHihglight from "components/ResourceHihglight";
import ResourceList from "components/ResourceList";

function Home() {

  return (
    <Layout>
      <ResourceHihglight />
      <Newsletter />
      <ResourceList />
    </ Layout>
  )
}


export default Home;