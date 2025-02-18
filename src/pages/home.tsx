import { BestSellers } from '../components/home/best-sellers';
import { Carousel } from '../components/home/carousel';
import { FeaturedProducts } from '../components/home/featured-products';
import Logo3D from '../components/home/logo3d';
import { NewProducts } from '../components/home/new-produts';
import { TrendingNow } from '../components/home/trending-now';

export function Home() {

  return (
    <div className="pt-10 min-h-screen bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)">
      {/* <Carousel/> */}
      <Logo3D/>
      <div>
        {/* <FeaturedProducts /> */}
        {/* <BestSellers /> */}
        {/* <TrendingNow /> */}
        <NewProducts/>
      </div>
    </div>
  );
}
