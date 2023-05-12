import Layout from "../components/UI/Layout";
import CategoryContainer from "../components/Category/CategoryContainer";
import FeaturedContainer from "../components/Events/FeaturedContainer";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <CategoryContainer />
      <FeaturedContainer />
    </Layout>
  );
};
export default IndexPage;
