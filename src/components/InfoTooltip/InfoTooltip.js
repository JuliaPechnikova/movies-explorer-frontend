import './InfoTooltip.css';
import editFormImage from '../../images/edit-form-image.svg';

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen !== "" ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <h2 className="popup__header">{props.isOpen}</h2>
      <button className="popup__close-btn" type="reset" onClick={props.onClose}>
        <img className="popup__close-btn-image" src={editFormImage} alt="X"/>
      </button>
    </div>
    </div>
  );
}

export default InfoTooltip;
