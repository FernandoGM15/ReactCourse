import { CardMedia } from "@mui/material";

type NewImageProps = {
  urlToImage: string | null;
  title: string;
};
const NewImage = ({ urlToImage, title }: NewImageProps) => {
  const imageNotAvailable =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    
  return (
    <CardMedia
      height="250px"
      component="img"
      alt={`${title}-image`}
      image={urlToImage ?? imageNotAvailable}
    />
  );
};
export default NewImage;
