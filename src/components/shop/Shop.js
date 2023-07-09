import { SearchOutlined } from "@ant-design/icons";
import { Input, Row, Col, Divider } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useCallback, useContext } from "react";
import { ProductsContext, SearchContext } from "../../App";
import { fetchAllProducts } from "../../services/productService";
import SHOP_PROFILE_URL from "../../assets/store-profile.png";
import DIRECTION_URL from "../../assets/directions.png";

export const Shop = () => {
  const [search, setSearch] = useContext(SearchContext);
  const [products, setProducts] = useContext(ProductsContext);

  const debounce = (cb, delay = 1000) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const productSearch = useCallback(
    debounce(async (text) => {
      const products = await fetchAllProducts();
      const results = products.filter((product) => {
        if (text === "") return products;
        return product.title.toLowerCase().includes(text.toLowerCase());
      });
      setProducts(results);
    }),
    []
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
    productSearch(e.target.value);
  };

  return (
    <div className="shop">
      <Row className="view">
        <Col xs={24} sm={24} md={3} lg={3} xl={3}>
          <img src={SHOP_PROFILE_URL} alt="Shop Profile" />
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <div className="">
            <h2>Common Baniya Grocery</h2>
            <h4>Groceries</h4>
            <div style={{ display: "flex" }}>
              <span>
                <span className="bold-text">
                  <StarFilled />
                  &nbsp;4.2
                </span>
                <br />
                <span className="light-text">5600 ratings</span>
              </span>
              <Divider type="vertical" style={{ height: "auto" }} />
              <span>
                <span className="bold-text">44 Hrs</span>
                <br />
                <span className="light-text">Delivery Time</span>
              </span>
              <Divider type="vertical" style={{ height: "auto" }} />
              <span>
                <span className="bold-text">&#8377; 400</span>
                <br />
                <span className="light-text">Min Order</span>
              </span>
              <Divider type="vertical" style={{ height: "auto" }} />
              <span>
                <span className="bold-text">9 am - 10 pm</span>
                <br />
                <span className="light-text">Shop Timings</span>
              </span>
              <Divider type="vertical" style={{ height: "auto" }} />
              <span>
                <span className="bold-text">+91 9999999999</span>
                <br />
                <span className="light-text">Call Us</span>
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <img src={DIRECTION_URL} alt="Directions" />
        </Col>
      </Row>
      <Input
        size="large"
        placeholder="Search for a product in this shop"
        prefix={<SearchOutlined />}
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};
