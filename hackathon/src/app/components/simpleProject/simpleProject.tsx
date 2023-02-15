import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActions from '@mui/material/CardActions';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Chip from '@mui/material/Chip';

export interface ProjectProps {
  authorName: string;
  projName: string;
  date: string;
  description: string;
  phoneNumber: string;
  imgUrl?: string;
}

export default function SimpleProject(props: ProjectProps) {
  /**
   * send a whatsapp message
   * @param phoneNumber - the phone number to send the whatsapp mwssage
   */
  const messageWhatsapp = (phoneNumber: string): void => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  /**
   * redirect to email
   * @param email - the email to send the mail
   */
  const sendEmail = (email: string): void => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Card
      sx={{ width: '30%', maxWidth: '400px', minWidth: '250px' }}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], marginLeft: '10px' }}
            aria-label="name"
          >
            {props.authorName.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.projName}
        subheader={props.date}
      />
      <Grid container spacing={2} rowSpacing={3}>
        <Grid item xs={6}>
          <CardContent>
            <h1> {props.projName} </h1>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            height="194"
            image="assets\download.jpg"
            alt="project image"
          />
        </Grid>
      </Grid>
      <Box
        p={2}
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Chip label="ספורט ובריאות" />
        <Chip label="איכות הסביבה" />
        <Chip label="חינוך" />
        <Chip label="כלכלה" />
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="mail">
          <ContactMailIcon
            onClick={() => {
              sendEmail('nivshirazi9@gmail.com');
            }}
          />
        </IconButton>
        <IconButton>
          <WhatsAppIcon
            onClick={() => {
              console.log('whatsapp');
              messageWhatsapp(props.phoneNumber);
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
