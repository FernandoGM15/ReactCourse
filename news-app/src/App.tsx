import { Container, Grid, Typography } from "@mui/material";
import Form from "./components/form";
import { NewsProvider } from "./context/news.provider";
import NewsList from "./components/news-list";

function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            News Searcher
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={8} xs={12} xl={6}>
            <Form />
          </Grid>
        </Grid>
        <NewsList />
      </Container>
    </NewsProvider>
  );
}

export default App;
