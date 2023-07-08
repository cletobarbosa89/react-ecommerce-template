import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Store = () => {
  return (
    <div className="banner">
      <Input
        size="large"
        placeholder="Search for a product in this shop"
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default Store;
