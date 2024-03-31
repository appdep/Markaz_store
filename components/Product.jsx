import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price ,discount} }) => {
  const router = useRouter();

  useEffect(() => {
    const handleBackButton = () => {
      const currentPath = router.asPath;
      if (currentPath.startsWith(`/product${slug.current}`)) {
        router.push('/');
      }
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [router]);

  
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            //width={150}
            //height={150}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Rs. {price}</p>
          <h5 className="product-discount">{discount}</h5>
        </div>
      </Link>
    </div>
  )
}

export default Product