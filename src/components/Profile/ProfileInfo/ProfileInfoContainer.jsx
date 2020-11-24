import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";
import { toggleShowTxtAC, setUserStatusAC } from "../../../redux/profileReduser";
import { profileApi } from "../../../api/api";


const mapState = (state) => {

  return {
    description: state.profilePage.profileDescription,
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    me: state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    onClick: e => {
      e.currentTarget.setAttribute("disabled", true);
      dispatch(toggleShowTxtAC(true));
    },
    updateStatus: status => profileApi.updateStatus(status).then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
      }
    })
  }
}

export default connect(mapState, mapDispatch)(ProfileInfo);
