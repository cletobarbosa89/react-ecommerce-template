import { Layout, Col, Row, Input, Select, Dropdown, Space } from "antd";
import { DownOutlined, HeartTwoTone } from "@ant-design/icons";
import LOGO_URL from "/../assets/logo.png";
import { Cart } from "../cart/Cart";

const { Header } = Layout;
const { Search } = Input;

// Search categories
const searchOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "daily-essesntials",
    label: "Daily Essesntials",
  },
  {
    value: "groceries",
    label: "Groceries",
  },
];

// Location options
const locationDropdowns = [
  {
    key: "1",
    label: <span>Lokhandwala, Andheri</span>,
  },
];

// Account options
const accountMenuLinks = [
  {
    key: "1",
    label: <a href="/">Profile</a>,
  },
  {
    key: "2",
    label: <a href="/">Settings</a>,
  },
  {
    key: "3",
    label: <a href="/">Log Out</a>,
  },
];

export const HeaderContainer = () => {
  const onSearch = () => {};

  return (
    <>
      <Header className="header">
        <Row>
          <Col xs={24} sm={24} md={2} lg={2} xl={2} className="divider">
            <div className="logo">
              <img src={LOGO_URL} alt="Logo" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={3} lg={3} xl={3}>
            <div className="location">
              <span>
                <HeartTwoTone twoToneColor="#b8238e" />
                <span className="title">Home</span>
              </span>
              <Dropdown menu={{ items: locationDropdowns }}>
                <div onClick={(e) => e.preventDefault()}>
                  <Space>
                    Lokhandwala, Andheri
                    <DownOutlined />
                  </Space>
                </div>
              </Dropdown>
            </div>
          </Col>
          <Col xs={24} sm={24} md={9} lg={9} xl={9}>
            <div className="search">
              <Select
                popupMatchSelectWidth={200}
                defaultValue="all"
                options={searchOptions}
              />
              <Search
                placeholder="Search daily essesntials, groceries and more..."
                enterButton
                onSearch={onSearch}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={5} lg={5} xl={5}>
            <div className="menu">
              <span>Shops</span>
              <span>Offers</span>
              <Dropdown menu={{ items: accountMenuLinks }}>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <Space>
                    Account
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </Col>
          <Col xs={24} sm={24} md={5} lg={5} xl={5}>
            <div className="cart">
              <Cart />
            </div>
          </Col>
        </Row>
      </Header>
    </>
  );
};
