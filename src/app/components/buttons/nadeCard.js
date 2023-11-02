import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';

export default function NadeCard(props) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const mapName = props.nade.map.toLowerCase();

  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: '#212836', textAlign: 'center'}}>
      <CardHeader
        title={
          <Typography variant="h6" style={{textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: '1rem'}}>
            {props.nade.name}
          </Typography>
        }
        subheader={
          <Typography variant="body1" style={{textAlign: 'center', color: '#BBC1C8', fontSize: '0.95rem'}}>
            {capitalizeFirstLetter(props.nade.map)}
          </Typography>
        }

      />
      <CardMedia
        component="img"
        height="194"
        image={`/images/${mapName}.jpg`}
        alt="CS2 Mirage Map"
      />
      <CardActions disableSpacing>

      </CardActions>
    </Card>
  );
}
