import './BtnAjoutRessource.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function BtnAjoutRessource() {
  return (
    // <button className="BtnAjoutRessource">
    //   Ajouter
    // </button>
    <Fab className="BtnAjoutRessource">
      <AddIcon />
    </Fab>
  );
}