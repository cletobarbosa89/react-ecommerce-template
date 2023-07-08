import { Layout, ConfigProvider } from "antd";

const LayoutContainer = ({ children }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "'Lato', sans-serif",
          },
        }}
      >
        <Layout className="layout">{children}</Layout>
      </ConfigProvider>
    </>
  );
};

export default LayoutContainer;
