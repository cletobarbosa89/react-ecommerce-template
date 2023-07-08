import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const items = [
  {
    href: "/",
    title: <HomeOutlined />,
  },
  {
    href: "/",
    title: "India",
  },
  {
    href: "/",
    title: "Mumbai",
  },
  {
    href: "/",
    title: "Vile-Parle",
  },
  {
    href: "/",
    title: "Groceries",
  },
];

const BreadcrumbContainer = () => {
  return <Breadcrumb className="breadcrumb" items={items}></Breadcrumb>;
};

export default BreadcrumbContainer;
