import { Row, Col } from "antd";
import MAIN_BANNER_URL from "../../assets/main-banner.png";
import BANNER_1 from "../../assets/banner-1.png";
import BANNER_2 from "../../assets/banner-2.png";

export const Banner = () => {
  return (
    <>
      <Row className="banner-container">
        <Col span={24}>
          <img src={MAIN_BANNER_URL} alt="Main banner" />
        </Col>
      </Row>
      <Row className="banner-container" style={{ backgroundColor: "#fff" }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h4 style={{ marginLeft: "10px" }}>In Focus Today</h4>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <img src={BANNER_1} alt="Main banner" />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <img src={BANNER_2} alt="Main banner" />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <img src={BANNER_1} alt="Main banner" />
        </Col>
      </Row>
    </>
  );
};
