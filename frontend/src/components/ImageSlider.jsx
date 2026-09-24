import SimpleImageSlider from "react-simple-image-slider";


const ImageSlider = ({
  images = [],
  width = 372,
  height = 155,
}) => {
  if (!images.length) return null;

  return (
    <div
      className="image-slider"
      style={{
        width,
        height,
      }}
    >
      <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
  );
};

export default ImageSlider;