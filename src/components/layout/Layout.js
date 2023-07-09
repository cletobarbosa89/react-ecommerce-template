import { Layout, ConfigProvider } from "antd";

export const LayoutContainer = ({ children }) => {
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
