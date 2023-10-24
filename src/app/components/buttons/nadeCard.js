import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';

export default function NadeCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: '#212836', textAlign: 'center'}}>
      <CardHeader
        title={
          <Typography variant="h6" style={{textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: '1rem'}}>
            {props.nade.name}
          </Typography>
        }
        subheader={
          <Typography variant="p" style={{textAlign: 'center', color: '#BBC1C8', fontSize: '0.95rem'}}>
            {props.nade.map}
          </Typography>
        }

      />
      <CardMedia
        component="img"
        height="194"
        image="https://staticg.sportskeeda.com/editor/2023/10/fc259-16962077266319-1920.jpg"
        alt="CS2 Mirage Map"
      />
      <CardActions disableSpacing>

      </CardActions>
    </Card>
  );
}
