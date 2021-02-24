import avatar from '../images/avatar.png';
import './Entete.scss';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tailleAvatar: {
    width: '30px',
    height: '30px'
  }
}));

export default function Entete() {
  const classes = useStyles();
  return (
    <header className="Entete">
      <div className="logo">Signets (Beta)</div>
      <div className={`avatar ${classes.root}`}>
        <span>Camille Semaan</span>
        <Avatar src={avatar} alt="Camille Semaan" />
      </div>
    </header>
  );
}