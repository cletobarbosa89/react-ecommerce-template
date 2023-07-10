import { useState, createContext } from "react";
import { Layout } from "antd";
import "./App.css";
import { LayoutContainer } from "./components/layout/Layout";
import { HeaderContainer } from "./components/layout/Header";
import { FooterContainer } from "./components/layout/Footer";
import { BreadcrumbContainer } from "./components/common/Breadcrumb";
import { ProductList } from "./components/product/ProductList";
import { Shop } from "./components/shop/Shop";
import { Banner } from "./components/common/Banner";
import { Provider } from "react-redux";
import store from "./redux/store";

const { Content } = Layout;

export const ProductsContext = createContext();
export const SearchContext = createContext();

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <>
      <Provider store={store}>
        <ProductsContext.Provider value={[products, setProducts]}>
          <SearchContext.Provider value={[search, setSearch]}>
            <LayoutContainer>
              <HeaderContainer />
              <BreadcrumbContainer />
              <Shop />
              <Content className="content">
                {search === "" ? <Banner /> : null}
                <ProductList />
              </Content>
              <FooterContainer />
            </LayoutContainer>
          </SearchContext.Provider>
        </ProductsContext.Provider>
      </Provider>
    </>
  );
}
