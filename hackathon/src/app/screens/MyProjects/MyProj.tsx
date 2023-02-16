import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Chip } from '@mui/material';
import { data } from './data';

const theme = createTheme();

export default function Album() {
  const handleClickScroll = () => {
    const element = document.getElementById('first');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickScroll2 = () => {
    const element = document.getElementById('second');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScroll3 = () => {
    const element = document.getElementById('three');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <br />
      <AppBar position="relative" color="transparent" />
      <Box sx={{ '& button': { m: 1 } }}>
        <div>
          <Button
            style={{
              width: '20%',
              position: 'relative',
              right: '7%',
              backgroundColor: '#B98376',
            }}
            variant="contained"
            size="large"
            onClick={handleClickScroll}
          >
            פרטי הפרוייקט
          </Button>
          <Button
            style={{
              width: '20%',
              position: 'relative',
              right: '20%',
              backgroundColor: '#B98376',
            }}
            variant="contained"
            size="large"
            onClick={handleClickScroll2}
          >
            שיתופי פעולה
          </Button>
          <Button
            style={{
              width: '20%',
              position: 'relative',
              right: '30%',
              backgroundColor: '#B98376',
            }}
            variant="contained"
            size="large"
          >
            פרטי השגריר
          </Button>
        </div>
      </Box>
      <br />
      <Button
        variant="contained"
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          width: '50%',
          display: 'block',
          margin: 'auto',
          fontSize: 20,
        }}
      >
        עקוב אחרי הפרוייקט
      </Button>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" id="first">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              המלונה החמה
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              בפרוייקט שלי אני תומכת בכלבים עזובים ומחברת בינהם לבין גני ילדים
              בסיכון. הפרויקט מנוהל בדרום אבל אנו פועלים בכל רחבי הארץ. הפרויקט
              פעיל מאז 2020 וכיום אנו מפעילים התנדבויות בשלושה גני ילדים על בסיס
              יומי
            </Typography>
            <div style={{ position: 'relative', right: '30%' }}>
              <img src=".\assets\dog.jpg" width="45%"></img>
            </div>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md" id="second">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    image=".\assets\car.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      שת"פ
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Box
                      p={2}
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-around"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <h3> סוג שת"פ</h3>
                      <Chip label={card.type}></Chip>
                    </Box>
                    <Box
                      p={2}
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-around"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <h3> תחום </h3>
                      <Chip label={card.field} style={{ marginLeft: '6px' }} />
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
