import { connect } from "react-redux";
import { setCurrentUserAC } from "../../../redux/dialogsReduser";
import DialogItem from "./DialogItem";

const mapStateToProps = (state, ownProps) => {
 
  let { user } = ownProps;
  if (!user) {
    user = { id: null }
  }
  let path = "/dialogs/" + user.id;
  
  return {
    user: user,
    path: path
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: id => {
      dispatch(setCurrentUserAC(id));
    }
  }
}

const DialogItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogItem);

export default DialogItemContainer;
