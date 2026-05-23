import React, { useMemo } from 'react';
import { useFetchProducts } from '../../features/products/useFetchProducts';
import { getBrandNewModels } from '../shared/helpers/brandNewModels';
import { Loader } from '../../components/Loader';
import { HomeBannerSlider } from './components/HomeBannerSlider';
import { ProductSlider } from '../../components/ProductSlider';
import { ShopByCategory } from './components/ShopByCategory';
import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const { products, isLoading, error } = useFetchProducts();

  const brandNew = useMemo(() => getBrandNewModels(products, 8), [products]);
  const hotPrices = useMemo(
    () =>
      products
        .filter(p => p.fullPrice !== undefined && p.fullPrice > p.price)
        .sort((a, b) => b.fullPrice! - b.price - (a.fullPrice! - a.price))
        .slice(0, 8),
    [products],
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className={styles.homePage__error}>{error}</div>;
  }

  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePage__visuallyHidden}>Product Catalog</h1>
      <h2 className={styles.homePage__title}>Welcome to Nice Gadgets store!</h2>

      <section className={styles.homePage__section}>
        <HomeBannerSlider />
      </section>

      <section className={styles.homePage__section}>
        <ProductSlider
          title="Brand new models"
          products={brandNew}
          hideDiscount
        />
      </section>

      <section className={styles.homePage__section}>
        <h2 className={styles.homePage__sectionTitle}>Shop by category</h2>
        <ShopByCategory />
      </section>

      <section className={styles.homePage__section}>
        <ProductSlider title="Hot Prices" products={hotPrices} />
      </section>
    </div>
  );
};
