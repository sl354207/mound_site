import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const gallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image="https://res.cloudinary.com/dr3hjsjiq/image/upload/v1626201646/sample.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image="https://res.cloudinary.com/dr3hjsjiq/image/upload/v1626201646/sample.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image="https://res.cloudinary.com/dr3hjsjiq/image/upload/v1626201646/sample.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image="https://res.cloudinary.com/dr3hjsjiq/image/upload/v1626201646/sample.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default gallery;
