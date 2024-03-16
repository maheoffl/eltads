import React from "react";
import Client from "./Client";

const data = [
  {
    src: "https://epaper.teluguprabha.net//img/logo/logo.png",
    alt: "telugu prabha",
  },
  {
    src: "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2022/10/ntnews-logo.jpeg",
    alt: "namasthe telangana",
  },
  {
    src: "https://imgs.search.brave.com/NwWU7hI_fATTQtywAV0VUhbm-GLlWWVLN2_XhJ0WW1Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly96ZWN1/Zi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDgvemVj/dWYtc3lydXAtbG9n/by5wbmc",
    alt: "zcuf",
  },
  {
    src: "https://cdn.muthootfinance.com/sites/default/files/files/logo_0.webp",
    alt: "muthut",
  },
  {
    src: "https://amazon-pay.brightspotcdn.com/75/8c/05780a7c41eb91759c77310a6f85/amazonpay-logo-rgb-clr.svg",
    alt: "amazon pay",
  },
  {
    src: "https://wellnesshospitals.in/wp-content/uploads/2023/04/Wellness-hospitals.png",
    alt: "welness hospitals",
  },
  {
    src: "https://honda.com.np/wp-content/themes/honda/assets/img/global_top_logo.png",
    alt: "honda",
  },
  {
    src: "https://bank.sbi/o/SBI-Theme/images/custom/logo.png",
    alt: "sbi",
  },
  {
    src: "https://imgs.search.brave.com/YBjxCuKKGOpUSP8kqndNKNtdHzBqV7BvgWdBStrLyPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I5L1Nwcml0ZV9M/b2dvLnN2Zw.svg",
    alt: "sprite",
  },
  {
    src: "https://ragnarply.com/img/ragnarply.jpg",
    alt: "ragnarply",
  },
  {
    src: "https://www.vanmply.com/images/logo.png",
    alt: "vanmply",
  },
  {
    src: "https://www.tajpuria.co.in/images/logo-5.png",
    alt: "tajpuria",
  },
];

function Testimonials() {
  return (
    <div className=" h-[60vh] w-full">
      <div className="clienttxt w-full h-[15%]  flex items-center justify-center text-3xl font-mono capitalize">
        <h3>Our Clients</h3>
      </div>
      <div className="clientlogo w-full h-[25%]  px-[10vw] flex justify-between  items-center">
        <Client src={data[0].src} alt={data[0].alt} />
        <Client src={data[1].src} alt={data[1].alt} />
        <Client src={data[2].src} alt={data[3].alt} />
        <Client src={data[3].src} alt={data[5].alt} />
      </div>
      <div className="clientlogo w-full h-[25%]  px-[10vw] flex justify-between  items-center">
        <Client src={data[4].src} alt={data[0].alt} />
        <Client src={data[5].src} alt={data[0].alt} />
        <Client src={data[6].src} alt={data[0].alt} />
        <Client src={data[7].src} alt={data[0].alt} />
      </div>
      <div className="clientlogo w-full h-[25%]  px-[10vw] flex justify-between  items-center">
        <Client src={data[8].src} alt={data[0].alt} />
        <Client src={data[9].src} alt={data[0].alt} />
        <Client src={data[10].src} alt={data[0].alt} />
        <Client src={data[11].src} alt={data[0].alt} />
      </div>
    </div>
  );
}

export default Testimonials;
