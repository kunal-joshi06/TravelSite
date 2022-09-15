import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/stays/breadcrumb';
import ProductsFilter from '../components/stays/products-filter';
import ProductsContent from '../components/stays/products-content';

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