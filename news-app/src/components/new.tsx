import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Article } from "../context/news.provider";
import NewImage from "./new-image";

type NewProps = {
  article: Article;
};

const New = ({ article }: NewProps) => {
  const { urlToImage, url, title, description, source } = article;
  return (
    <Grid item lg={4} md={6}>
      <Card>
        <NewImage title={title} urlToImage={urlToImage} />
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" component="div">
            {description}
          </Typography>
          <CardActions>
            <Link
              target="_blank"
              href={url}
              variant="button"
              width="100%"
              textAlign="center"
              sx={{ textDecoration: "none" }}
            >
              Watch article
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default New;
