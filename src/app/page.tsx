import HeroHome from "@/components/HeroHome";
import MarkGrid from "@/components/MarkGrid";
import ProductsGrid from "@/components/ProductsGrid";
import ServicesGrid from "@/components/ServicesGrid";

const Home = () => {
  return (
    <main className="">
      <HeroHome />
      <ServicesGrid />
      <MarkGrid />
      <ProductsGrid />
    </main>
  );
}
export default Home;