import { NavLink } from "react-router-dom";
import { getTitleAC } from "../../redux/navReduser";
import { connect } from "react-redux";

const mapState = (state, ownProps) => {
  let { to, exact, activeClassName } = ownProps;
  return {
    activeClassName: activeClassName,
    to: to,
    exact: exact
  };
};

const mapDispatch = dispatch => {
  return {
    onClick: e => {
      let path = "/" + e.target.href.split("/")[3];
      dispatch(getTitleAC(path))
    }
  }
};

const NavLinkContainer = connect(mapState, mapDispatch)(NavLink);

export default NavLinkContainer;
