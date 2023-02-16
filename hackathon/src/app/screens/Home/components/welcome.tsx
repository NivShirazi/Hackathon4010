import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../../../../assets/icon.jpeg';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Card style={{ backgroundColor: 'gray' }}>
        <CardMedia
          component="img"
          alt="logo"
          style={{
            width: 300,
            height: 300,
            borderRadius: '20%',
            position: 'relative',
            right: '40%',
          }}
          image={logo}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            align="center"
            color="#ffffff"
            component="div"
            style={{ width: '100%', right: '40%' }}
          >
            ברוכים הבאים!
          </Typography>
          <Typography
            variant="inherit"
            align="center"
            color="#ffffff"
            style={{ width: '100%', right: '40%' }}
          >
            מנהיגים יוצרים מנהיגים
            <br></br>
            בואו לעזור לדורות העתיד ולקחת חלק ברקמה אנושית אחת שמטרתה לקדם את
            הקהילה
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => navigate('/register')}
            size="large"
            variant="contained"
            style={{
              width: '25%',
              position: 'relative',
              right: '15%',
              backgroundColor: '#B98376',
            }}
          >
            הירשם
          </Button>
          <Button
            onClick={() => navigate('/home')}
            size="large"
            variant="contained"
            style={{
              width: '25%',
              position: 'relative',
              right: '40%',
              backgroundColor: '#B98376',
            }}
          >
            המשך כאורח
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
