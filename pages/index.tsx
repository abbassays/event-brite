import Layout from "../components/Layout";
import CategoryContainer from "../components/Category/CategoryContainer";
import FeaturedContainer from "../components/Featured";

const IndexPage = () => {

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <CategoryContainer />
      <FeaturedContainer />
    </Layout>
  );
};
export default IndexPage;
