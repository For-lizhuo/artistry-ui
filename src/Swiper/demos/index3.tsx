import { Swiper } from 'artistry-ui';
import React from 'react';

export default function SwiperDemos1() {
  const imgList = [
    'https://img0.baidu.com/it/u=3790699013,619352165&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
    'https://img2.baidu.com/it/u=2238049457,3919805703&fm=253&fmt=auto&app=138&f=JPEG?w=955&h=500',
    'https://img1.baidu.com/it/u=1250037183,183949373&fm=253&fmt=auto&app=138&f=PNG?w=800&h=330',
    'https://img0.baidu.com/it/u=2580671293,3566001190&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
    'https://img0.baidu.com/it/u=732048776,2472344964&fm=253&fmt=auto?w=640&h=426',
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Swiper imgList={imgList} autoPlayer/>
    </div>
  );
}
