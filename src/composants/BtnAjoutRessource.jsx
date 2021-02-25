import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: '#333',
    color: '#fff'
  }
}));

export default function BtnAjoutRessource() {
  const classes = useStyles();

  return (
    <Fab className={classes.absolute}>
      <AddIcon />
    </Fab>
  );
}