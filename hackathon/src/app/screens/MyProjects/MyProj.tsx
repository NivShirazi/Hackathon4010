import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BoxSx from "./components/headButtons";
import { positions, textAlign } from "@mui/system";
import ColorButtons from "./components/followLink";
import { Chip } from '@mui/material';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color='transparent'>
        <Toolbar>
          <Typography style={{ width: '100%', position : "relative" , right: "50%"}} variant="h6" color="GrayText" noWrap>
            הפרוייקט שלי  
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ '& button': { m: 1 } }}>

      <div>
        <Button style={{ width: '20%', position : "relative" , right: "7%", backgroundColor:'#B98376'}} variant="contained" size="large" >
          פרטי הפרוייקט
        </Button>
        <Button style={{ width: '20%', position : "relative" , right: "20%", backgroundColor:'#B98376'}} variant="contained" size="large">
          שיתופי פעולה
        </Button>
        <Button style={{ width: '20%', position : "relative" , right: "30%", backgroundColor:'#B98376'}} variant="contained" size="large">
          פרטי השגריר
        </Button>
      </div>
    </Box>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              המלונה החמה
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             בפרוייקט שלי אני תומכת בכלבים עזובים ומחברת בינהם לבין גני ילדים בסיכון. הפרויקט מנוהל בדרום אבל אנו פועלים בכל רחבי הארץ. 
             הפרויקט פעיל מאז 2020 וכיום אנו מפעילים התנדבויות בשלושה גני ילדים על בסיס יומי
            
            </Typography>
            <div style = {{position: "relative", right: "30%"}}>
              <img src ='.\assets\dog.jpg' width = "45%" ></img>
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
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image=".\assets\car.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      שת"פ
                    </Typography>
                    <Typography>
                    אשמח לקבל עזרה בהסעה של הילדים לגינות כלבים כדי שיוכלו להתחבר יותר
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Box
                p = {2}
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                flexWrap="wrap"
            >
                <Chip label="חינוך" style={{marginLeft: "6px"}}/>
                <Chip label = "משאבים"></Chip>
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