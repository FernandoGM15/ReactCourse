import { Grid, Pagination, Stack, Typography } from "@mui/material";
import useNewsContext from "../hooks/useNewsContext";
import New from "./new";

const NewsList = () => {
  const { news, totalArticles, handleChangePage, page } = useNewsContext();

  const pagesTotal = Math.ceil(totalArticles / 20);
  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Latest news
      </Typography>
      <Grid container spacing={2}>
        {news.map((article) => (
          <New article={article} key={article.url} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginY: "1.5rem",
        }}
      >
        <Pagination
          count={pagesTotal}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </>
  );
};
export default NewsList;
