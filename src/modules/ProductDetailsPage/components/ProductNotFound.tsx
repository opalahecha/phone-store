import React from 'react';
import { Link } from 'react-router';

import { BackLink } from '../../../components/BackLink';
import productNotFoundImg from '../../../assets/images/product-not-found.webp';
import { block, cx, styles } from './styles';

interface Props {
  productId?: string;
  onBack: () => void;
}

export const ProductNotFound: React.FC<Props> = ({ productId, onBack }) => (
  <div className={styles[block]}>
    <div className={cx('container')}>
      <BackLink onClick={onBack} />
      <h1 className={cx('title')}>Product was not found</h1>
      <p className={cx('not-found-text')}>
        The product with id <strong>{productId}</strong> is missing.
      </p>
      <Link className={cx('home-link')} to="/">
        Return to home
      </Link>
      <img
        className={cx('not-found-image')}
        src={productNotFoundImg}
        alt="Product not found"
      />
    </div>
  </div>
);
