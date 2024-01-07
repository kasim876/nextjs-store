'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';
import ProductTile from './tile/tile';
import {Product} from '../lib/definitions';

export default function Carousel({products}: {products: Product[]}) {
  return (
    <Swiper
      className="!px-4 mb-4"
      modules={[Autoplay]}
      loop={true}
      speed={5000}
      autoplay={{delay: 0}}
      spaceBetween={16}
      slidesPerView="auto"
      allowTouchMove={false}
    >
      {products.map(product => (
        <SwiperSlide
          className="!w-1/4"
          key={product.id}
        >
          <Link
            className="relative block w-full h-full aspect-square"
            href={`/product/${product.id}`}
          >
            <ProductTile
              label={{
                amount: product.amount,
                title: product.title,
              }}
              alt={product.title}
              src={product.image_url[0]}
              fill
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
