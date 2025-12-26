export function NextArrowForFeaturedWork({ onClick }) {
  let right = "0"; // default mobile
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    right = "1rem";
  } else if (window.innerWidth >= 1024) {
    right = "24.5rem"; // lg and above
  }
  return (
    <div
      onClick={onClick}
      className="absolute -translate-y-1/2 z-20 cursor-pointer bg-[rgba(102,102,102,0.6)] text-white rounded-full hover:scale-110 transition"
      style={{
        display: "block",
        right: `${right}`,
        top: `12rem`,
        zIndex: 50,
      }}
    >
      <img src="/right.svg" alt="Next" className="w-10 h-10" />
    </div>
  );
}

export function PrevArrowForFeaturedWork({ onClick }) {
  let left = "2rem";
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    left = "1rem"; // tablet
  } else if (window.innerWidth >= 1024) {
    left = "25rem"; // lg and above
  }
  return (
    <div
      onClick={onClick}
      className="absolute -translate-y-1/2 z-20 cursor-pointer bg-[rgba(102,102,102,0.6)] text-white  rounded-full hover:scale-110 transition"
      style={{
        display: "block",
        left: left,
        top: "12rem",
        zIndex: 50,
      }}
    >
      <img src="/left.svg" alt="prev" className="w-10 h-10" />
    </div>
  );
}

export function NextArrowForCLientCard({ onClick }) {
  let right = "0"; // default mobile
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    right = "1rem";
  } else if (window.innerWidth >= 1024) {
    right = "14rem"; // lg and above
  }
  return (
    <div
      onClick={onClick}
      className="absolute -translate-y-1/2 z-20 cursor-pointer bg-[rgba(102,102,102,0.6)] text-white rounded-full hover:scale-110 transition"
      style={{
        display: "block",
        right: `${right}`,
        top: `12rem`,
        zIndex: 50,
      }}
    >
      <img src="/right.svg" alt="Next" className="w-10 h-10" />
    </div>
  );
}

export function PrevArrowForCLientCard({ onClick }) {
  let left = "2rem";
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    left = "1rem"; // tablet
  } else if (window.innerWidth >= 1024) {
    left = "14rem"; // lg and above
  }
  return (
    <div
      onClick={onClick}
      className="absolute -translate-y-1/2 z-20 cursor-pointer bg-[rgba(102,102,102,0.6)] text-white  rounded-full hover:scale-110 transition"
      style={{
        display: "block",
        left: left,
        top: "12rem",
        zIndex: 50,
      }}
    >
      <img src="/left.svg" alt="prev" className="w-10 h-10" />
    </div>
  );
}

export const settings2 = {
  dots: true,
  customPaging: (i) => (
    <div
      style={{
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "#717171",
        margin: "0 5px",
        cursor: "pointer",
      }}
    />
  ),
  appendDots: (dots) => (
    <div
      style={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "fit-content",
        height: "15px",
        backgroundColor: "#333333",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          marginTop: "4px",
          marginRight: "5px",
          listStyle: "none",
          padding: 0,
        }}
      >
        {dots.map((dot, index) => (
          <li key={index} style={{ margin: "0 0" }}>
            {dot}
          </li>
        ))}
      </ul>
    </div>
  ),
  arrows: true,
  infinite: true,
  speed: 400,

  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,

  prevArrow: <PrevArrowForCLientCard />,
  nextArrow: <NextArrowForCLientCard />,
};

export const settings = {
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToScroll: 1,

  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3, // LG+

  prevArrow: <PrevArrowForFeaturedWork />,
  nextArrow: <NextArrowForFeaturedWork />,

  responsive: [
    {
      breakpoint: "768px", // md
      settings: {
        slidesToShow: 2,
        centerPadding: "40px", // VERY IMPORTANT
      },
    },
  ],
};
