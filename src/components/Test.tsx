import { useState } from "react";

const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300",
];

export default function SimpleSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div style={{ position: "relative", width: "600px", margin: "0 auto" }}>
      <button
        onClick={prevSlide}
        style={{ position: "absolute", left: 0, top: "50%", zIndex: 2 }}
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        // style={{
        //   position: "absolute",
        //   width: "20px",
        //   right: 0,
        //   top: "50%",
        //   zIndex: 2,
        // }}
        className="absolute right-0 top-1/2 text-4xl "
      >
        ❯
      </button>

      {images.map((img, index) => (
        <div
          key={index}
          style={{
            display: index === current ? "block" : "none",
          }}
        >
          <img src={img} alt={`slide ${index}`} width="600" height="300" />
        </div>
      ))}
    </div>
  );
}
