import Carousel from "react-bootstrap/Carousel";

function CustomCarousel2() {
  return (
    // margin work needs to be done here
    <div
      style={{
        width: "100%",
        height: "38vh",
        minHeight: "5vh",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "45vh",
          paddingLeft: "0.1%",
          paddingRight: "0.11%",
        }}
      >
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../images/7.jpg")}
              alt="Carousel Image 1"
              style={{
                objectFit: "fill",
                width: "50vh",
                height: "37.9vh",
              }}
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../images/8.jpg")}
              alt="Carousel Image 1"
              style={{
                objectFit: "fill",
                width: "50vh",
                height: "37.9vh",
              }}
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../images/11.jpg")}
              alt="Carousel Image 1"
              style={{
                objectFit: "fill",
                width: "50vh",
                height: "37.9vh",
              }}
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../images/10.jpeg")}
              alt="Carousel Image 1"
              style={{
                objectFit: "fill",
                width: "50vh",
                height: "37.9vh",
              }}
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../images/9.jpg")}
              alt="Carousel Image 1"
              style={{
                objectFit: "fill",
                width: "50vh",
                height: "37.9vh",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CustomCarousel2;
