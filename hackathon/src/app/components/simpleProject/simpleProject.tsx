import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {red} from '@mui/material/colors';
import CardActions from '@mui/material/CardActions';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Chip from '@mui/material/Chip';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

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
    const nevigate = useNavigate();
    const moveToProject = () => {
        nevigate("/myProjects")
        // window.open(window.location.origin.concat("/myProjects")) ;
    }

    return (
        <Card
            sx={{
                width: '49%',
                minWidth: '380px',
                borderRadius: '10%',
                display: 'grid'
            }}
            style={{backgroundColor: '#f5f5f5'}}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{bgcolor: red[500], marginLeft: '10px'}}
                        aria-label="name"
                    >
                        {props.authorName.charAt(0)}
                    </Avatar>
                }
                title={props.authorName}
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
                        image="assets\image.jpg"
                        alt="project image"
                    />
                </Grid>
            </Grid>
            <h1> תחומי עניין</h1>
            <Box
                p={2}
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                flexWrap="wrap"
                padding={0}
            >
                <Chip label="ספורט ובריאות"/>
                <Chip label="איכות הסביבה"/>
                <Chip label="חינוך"/>
                <Chip label="כלכלה"/>
            </Box>
            <CardActions disableSpacing sx={{justifyContent: 'space-between'
                , padding: '18px'}}>
                <Grid>
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
                </Grid>
                <Grid>
                    <Button variant="contained" color={"error"} onClick={() => {
                        moveToProject();
                    }}>
                        לעמוד הפרויקט
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    );
}
