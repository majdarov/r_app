import { connect } from "react-redux";
import Message from "./Message";
import { setLikeAC } from "../../../redux/dialogsReduser";

const mapState = (state, ownProps) => {
  let { username, value, likes } = ownProps;
  return {
    username, value, likes
  }
}

const mapDispatch = (dispatch) => {
  
  function setLike(e) {
    if (e.target.tagName !== "I") return;
    let id = +e.target.closest("div").parentElement.id;
    let like;
    if (e.target.id === "like") {
      like = 1;
    } else {
      like = -1;
    }
    dispatch(setLikeAC(id, like));
  }

  return {
    clickMessage: e => setLike(e)
  }
}

const MessageContainer = connect(mapState, mapDispatch)(Message);

export default MessageContainer;
