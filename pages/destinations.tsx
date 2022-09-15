import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/destinations/breadcrumb';
import ProductsFilter from '../components/destinations/products-filter';
import ProductsContent from '../components/destinations/products-content';

const Products = () => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <ProductsFilter />
        <ProductsContent />
      </div>
    </section>
    <Footer />
  </Layout>
)
  
export default Products
  