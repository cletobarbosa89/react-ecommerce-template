import { useContext, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { ModalContext } from "../product/ProductList";
import "react-image-gallery/styles/css/image-gallery.css";

export const ProductGallery = () => {
  const [productImages, setProductImages] = useContext(ModalContext);

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
