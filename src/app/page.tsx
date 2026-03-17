import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Menu from '@/components/sections/Menu';
import Catering from '@/components/sections/Catering';
import Reviews from '@/components/sections/Reviews';
import Location from '@/components/sections/Location';
import OrderPlatforms from '@/components/sections/OrderPlatforms';
import FloatingButtons from '@/components/sections/FloatingButtons';
import CartSidebar from '@/components/cart/CartSidebar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Catering />
        <Reviews />
        <Location />
        <OrderPlatforms />
      </main>
      <Footer />
      <FloatingButtons />
      <CartSidebar />
    </>
  );
}
