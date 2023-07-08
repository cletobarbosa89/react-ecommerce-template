import { Layout } from "antd";
import "./App.css";
import LayoutContainer from "./components/layout/Layout";
import HeaderContainer from "./components/layout/Header";
import FooterContainer from "./components/layout/Footer";
import BreadcrumbContainer from "./components/common/Breadcrumb";
import ProductList from "./components/product/ProductList";
import Store from "./components/store/Store";

const { Content } = Layout;

export default function App() {
  return (
    <>
      <LayoutContainer>
        <HeaderContainer />
        <BreadcrumbContainer />
        <Store />
        <Content className="content">
          <ProductList />
        </Content>
        <FooterContainer />
      </LayoutContainer>
    </>
  );
}
