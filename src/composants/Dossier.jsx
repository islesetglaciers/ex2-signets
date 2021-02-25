import './Dossier.scss';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier" style={{ backgroundColor: couleur }}>
      <div className="couverture">
        <span className="deplacer">
          <SortIcon size="large"/>
        </span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
      </div>
      <button>
        <MoreVertIcon />
      </button>
    </article>
  );
}