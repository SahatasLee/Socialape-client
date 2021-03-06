import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
  },
  image: {
      minWidth: 200,
  },
  content: {
      padding: 25,
      objectFit: 'cover'
  }
};

export class Scream extends Component {
  render() {
    console.log(this.props);
    const {
      classes,
      scream: {
        body,
        userImage,
        userHandle,
        createAt,
        screamId,
        likeCount,
        commentCount,
      },
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia image={userImage} title="Profile image" className={classes.image} />
        <CardContent class={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {createAt}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);
