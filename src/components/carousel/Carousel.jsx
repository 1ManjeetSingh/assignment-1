import { useState, useEffect, useRef } from 'react';

const slidesData = [
  {
    title: 'Unique Tailored Solutions',
    description: 'Receive a custom set of questions tailored to your needs.',
    icon: (
      <img className='w-[220px] h-[200px]' src="https://s3-alpha-sig.figma.com/img/ecea/1173/4777aab880058fb4d2147c3b11940289?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbGZixBK2vRFeSgx7RL7~wYQ0C2QYUTEIxTNFpxuhdQrS9t4-a0y3nmeIUifHGr64T8iKP09Tet~cPOFQmAc0rXMg~e5CgY-XlqovuD6fsQlRnXkznGOG0vIeR4XUSEb5GpVDozCznyIN4rvRJscovEwjmqyI0nZVebVEL9DfQaQXRG35B5VtQY-OYzeppO663ovSlVT0ar9xxjsomMvCIH5vj7OBqkgASuC8UzxJGh0ZyzJ5pYA~QRtHpBA8YNFOWiKR1S6no-8UPivfn4vvyGHLpnvdlNpHEG4uF3fd79Q-flxDoQgNx7yyRTT~u2WvAca3zIN2zWz9MlvC-y4Ag__" alt="" />
    ),
  },
  {
    title: 'Multi-Select Options',
    description: 'Conveniently choose multiple options from a list.',
    icon: (
      <img className='w-[220px] h-[200px]' src="https://s3-alpha-sig.figma.com/img/ecea/1173/4777aab880058fb4d2147c3b11940289?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbGZixBK2vRFeSgx7RL7~wYQ0C2QYUTEIxTNFpxuhdQrS9t4-a0y3nmeIUifHGr64T8iKP09Tet~cPOFQmAc0rXMg~e5CgY-XlqovuD6fsQlRnXkznGOG0vIeR4XUSEb5GpVDozCznyIN4rvRJscovEwjmqyI0nZVebVEL9DfQaQXRG35B5VtQY-OYzeppO663ovSlVT0ar9xxjsomMvCIH5vj7OBqkgASuC8UzxJGh0ZyzJ5pYA~QRtHpBA8YNFOWiKR1S6no-8UPivfn4vvyGHLpnvdlNpHEG4uF3fd79Q-flxDoQgNx7yyRTT~u2WvAca3zIN2zWz9MlvC-y4Ag__" alt="" />
    ),
  },
  {
    title: 'Seamless Integration',
    description: 'Works with your existing systems without hassle.',
    icon: (
      <img className='w-[220px] h-[200px]' src="https://s3-alpha-sig.figma.com/img/ecea/1173/4777aab880058fb4d2147c3b11940289?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbGZixBK2vRFeSgx7RL7~wYQ0C2QYUTEIxTNFpxuhdQrS9t4-a0y3nmeIUifHGr64T8iKP09Tet~cPOFQmAc0rXMg~e5CgY-XlqovuD6fsQlRnXkznGOG0vIeR4XUSEb5GpVDozCznyIN4rvRJscovEwjmqyI0nZVebVEL9DfQaQXRG35B5VtQY-OYzeppO663ovSlVT0ar9xxjsomMvCIH5vj7OBqkgASuC8UzxJGh0ZyzJ5pYA~QRtHpBA8YNFOWiKR1S6no-8UPivfn4vvyGHLpnvdlNpHEG4uF3fd79Q-flxDoQgNx7yyRTT~u2WvAca3zIN2zWz9MlvC-y4Ag__" alt="" />
    ),
  },
  {
    title: 'Real-Time Analytics',
    description: 'Get insights on your performance in real-time.',
    icon: (
      <img className='w-[220px] h-[200px]' src="https://s3-alpha-sig.figma.com/img/ecea/1173/4777aab880058fb4d2147c3b11940289?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbGZixBK2vRFeSgx7RL7~wYQ0C2QYUTEIxTNFpxuhdQrS9t4-a0y3nmeIUifHGr64T8iKP09Tet~cPOFQmAc0rXMg~e5CgY-XlqovuD6fsQlRnXkznGOG0vIeR4XUSEb5GpVDozCznyIN4rvRJscovEwjmqyI0nZVebVEL9DfQaQXRG35B5VtQY-OYzeppO663ovSlVT0ar9xxjsomMvCIH5vj7OBqkgASuC8UzxJGh0ZyzJ5pYA~QRtHpBA8YNFOWiKR1S6no-8UPivfn4vvyGHLpnvdlNpHEG4uF3fd79Q-flxDoQgNx7yyRTT~u2WvAca3zIN2zWz9MlvC-y4Ag__" alt="" />
    ),
  },
  {
    title: 'Customizable Themes',
    description: 'Personalize the experience with custom themes.',
    icon: (
      <img className='w-[220px] h-[200px]' src="https://s3-alpha-sig.figma.com/img/ecea/1173/4777aab880058fb4d2147c3b11940289?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbGZixBK2vRFeSgx7RL7~wYQ0C2QYUTEIxTNFpxuhdQrS9t4-a0y3nmeIUifHGr64T8iKP09Tet~cPOFQmAc0rXMg~e5CgY-XlqovuD6fsQlRnXkznGOG0vIeR4XUSEb5GpVDozCznyIN4rvRJscovEwjmqyI0nZVebVEL9DfQaQXRG35B5VtQY-OYzeppO663ovSlVT0ar9xxjsomMvCIH5vj7OBqkgASuC8UzxJGh0ZyzJ5pYA~QRtHpBA8YNFOWiKR1S6no-8UPivfn4vvyGHLpnvdlNpHEG4uF3fd79Q-flxDoQgNx7yyRTT~u2WvAca3zIN2zWz9MlvC-y4Ag__" alt="" />
    ),
  },
  {
    title: '24/7 Support',
    description: 'Get assistance anytime, anywhere.',
    icon: (
      <img className='w-[220px] h-[200px]' src="https://s3-alpha-sig.figma.com/img/ecea/1173/4777aab880058fb4d2147c3b11940289?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbGZixBK2vRFeSgx7RL7~wYQ0C2QYUTEIxTNFpxuhdQrS9t4-a0y3nmeIUifHGr64T8iKP09Tet~cPOFQmAc0rXMg~e5CgY-XlqovuD6fsQlRnXkznGOG0vIeR4XUSEb5GpVDozCznyIN4rvRJscovEwjmqyI0nZVebVEL9DfQaQXRG35B5VtQY-OYzeppO663ovSlVT0ar9xxjsomMvCIH5vj7OBqkgASuC8UzxJGh0ZyzJ5pYA~QRtHpBA8YNFOWiKR1S6no-8UPivfn4vvyGHLpnvdlNpHEG4uF3fd79Q-flxDoQgNx7yyRTT~u2WvAca3zIN2zWz9MlvC-y4Ag__" alt="" />
    ),
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMouseDown = useRef(false);
  const startX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleMouseDown = (e) => {
    isMouseDown.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current) return;
    const deltaX = e.clientX - startX.current;

    if (deltaX > 50) {
      nextSlide();
      startX.current = e.clientX;
    } else if (deltaX < -50) {
      prevSlide();
      startX.current = e.clientX;
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div
      className="relative w-full max-w-8xl mx-auto"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex justify-center items-center relative overflow-hidden h-[350px]" >
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + slidesData.length) % slidesData.length;
          const isNext = index === (currentSlide + 1) % slidesData.length;

          return (
            <div
              key={index}
              className={`max-w-[743px] px-[48px] box-border absolute transition-all duration-500 ease-in-out ${isActive ? 'transform scale-110 z-20 opacity-100'
                : isPrev ? 'transform scale-100 -translate-x-20 z-10 '
                  : isNext ? 'transform scale-100 translate-x-20 z-10 '
                    : 'opacity-0'
                }`}
            >
              <div className="p-12 h-[244px] bg-gradient-to-r border-purple-600 border-2 from-blue-950 to-cyan-950 shadow-xl text-white rounded-lg flex justify-center items-center" 
              style={{borderRadius: '16px', background: 'linear-gradient(90deg, #2D2D54 19.18%, #0F0F36 76.34%)', boxShadow: '0px 0px 10px 0px #D388FF',}}>
                <div className='max-w-[300px]'>
                  <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <div className="flex items-center mb-4 justify-end">
                  {slide.icon}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 p-4">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-neutral-700' : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
