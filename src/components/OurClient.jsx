import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from 'swiper/react';


import p1 from '../assets/images/LOGO/123.png';
import p2 from '../assets/images/LOGO/CAFE.png';
import p3 from '../assets/images/LOGO/CITADIL.png';
import p4 from '../assets/images/LOGO/DLIM.png';
import p5 from '../assets/images/LOGO/F.png';
import p6 from '../assets/images/LOGO/FII3-01.png';
import p7 from '../assets/images/LOGO/Logo-OFPPT.png';
import p8 from '../assets/images/LOGO/MASSAR.png';
import p9 from '../assets/images/LOGO/My Patiss Logo.png';
import p10 from '../assets/images/LOGO/NDH.jpg';
import p11 from '../assets/images/LOGO/alf lila w lila.png';
import p12 from '../assets/images/LOGO/annayir cader_Plan de travail 1.png';
import p13 from '../assets/images/LOGO/ccs.png';
import p14 from '../assets/images/LOGO/firdawss.png';
import p15 from '../assets/images/LOGO/hijama_Plan de travail 1.png';
import p16 from '../assets/images/LOGO/hortalan-01.png';
import p17 from '../assets/images/LOGO/imasoft.png';
import p18 from '../assets/images/LOGO/indh.png';
import p19 from '../assets/images/LOGO/logo almoaayid.png';
import p20 from '../assets/images/LOGO/logo.png';
import p21 from '../assets/images/LOGO/logo almoaayid.png';
import p22 from '../assets/images/LOGO/nihan logo 3d_gold.png';
import p23 from '../assets/images/LOGO/tt.png';
import p24 from '../assets/images/LOGO/tytyty.png';
import p25 from '../assets/images/LOGO/النوابغ.png';
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


const imageList = [
	p1, p2, p3, p4, p5,
	p6, p7, p8, p9, p10,
	p11, p12, p13, p14, p15,
	p16, p17, p18, p19, p20,
	p21, p22, p23, p24, p25,
];

const OurClient = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		// slidesToScroll: ,
	};
	const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n


	return (
		<div>
			<div className="container">
				<div className="p-body text-center">
					<h3>{t("Nos clients")}</h3>
				</div>
				<div className='mt-4 mb-4'>
					<Swiper
						spaceBetween={10}
						slidesPerView={4}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>

						{imageList.map((client, index) => (
							<SwiperSlide key={index}>
								<div key={index}>
									<img src={client} 
									alt={`Client ${index + 1}`} style={{ width: "10rem", height: "5rem" }} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default OurClient;
