import Carousel from "react-bootstrap/Carousel";

function CustomCarousel1() {
  return (
    <div
      style={{
        width: "100%",
        height: "38vh",
        minHeight: "5vh",
        // backgroundColor: "Highlights",
        // marginTop: "1vh",
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
              src={require("../images/1.PNG")}
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
              src={require("../images/2.jpeg")}
              alt="Carousel Image 1"
              style={{
                objectFit: "fill",
                width: "50vh",
                height: "37.9vh",
              }}
            />
            {/* <Carousel.Caption>
              <h3>Integrity</h3>
              <p>We practice honesty, veracity and integrity in all that we do.</p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../images/14.jpeg")}
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
              src={require("../images/4.jpeg")}
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
              src={require("../images/5.jpeg")}
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

export default CustomCarousel1;
