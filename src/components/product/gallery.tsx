'use client';

import Image from 'next/image';
import {clsx} from 'clsx';
import {useState} from 'react';
import {Product} from '@/src/lib/definitions';
import {EffectFade} from 'swiper/modules';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Gallery({product}: {product: Product}) {
  const [swiper, setSwiper] = useState<SwiperClass>(null!);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  return (
    <>
      <Swiper
        modules={[EffectFade]}
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={swiper => setActiveSlideIndex(swiper.activeIndex)}
        effect={'fade'}
        fadeEffect={{
          crossFade: true,
        }}
        allowTouchMove={false}
        className="relative aspect-square w-full h-full max-h-[550px]"
      >
        {product.image_url.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={image}
              alt={`Image of ${product.title} number ${idx + 1}`}
              fill
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {product.image_url.length > 1 ? (
        <ul className="flex items-center justify-center gap-2 my-12 lg:mb-0">
          {product.image_url.map((image, idx) => {
            const active = activeSlideIndex === idx;

            return (
              <li
                className="w-20 h-20"
                key={image}
              >
                <button
                  className={clsx(
                    'group relative w-full h-full border-primary rounded-lg overflow-hidden hover:border-blue-600',
                    {
                      'border-2 border-blue-600 pointer-events-none': active,
                    },
                  )}
                  onClick={() => swiper.slideTo(idx, 0)}
                >
                  <Image
                    src={image}
                    alt={`Image of ${product.title} number ${idx + 1}`}
                    fill
                    className="w-full h-full group-hover:scale-105 transition"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
