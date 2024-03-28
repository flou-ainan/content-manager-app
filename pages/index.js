import Layout from "components/Layout";
import Newsletter from "components/Newsletter";
import ResourceHihglight from "components/ResourceHihglight";
import ResourceList from "components/ResourceList";
import {resources} from "api/data"

function Home() {
  let list = resources.map
  (item => (<><p>{JSON.stringify(item)}</p><hr/></>))
  return (
    <Layout>
      <ResourceHihglight />
      <Newsletter />
      <ResourceList />
      {list}
    </ Layout>
  )
}


export default Home;