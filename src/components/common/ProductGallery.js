import { useContext, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { ProductImagesContext } from "../product/ProductList";
import "react-image-gallery/styles/css/image-gallery.css";

export const ProductGallery = () => {
  const [productImages, setProductImages] = useContext(ProductImagesContext);

  return (
    <ImageGallery
      items={productImages}
      thumbnailPosition={"left"}
      lazyLoad
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};
