import Commodity from "./Commodity";
import { setPidAC, getGroups, getProducts, 
  setViewForm, getProductId, setFormData, 
  toggleFormPostAC, postFormData } from "../../redux/commodityReduser";
import { connect } from "react-redux";

const mapState = state => {
  state = state.commodityPage;
  return {
    isLoaded: state.isLoaded,
    groups: state.groups,
    price: "Price",
    pid: state.pid,
    commodities: state.commodities,
    comIsLoaded: state.comIsLoaded,
    error: state.error,
    viewForm: state.viewForm,
    formData: state.form.formData,
    formPost: state.form.formPost
  };
};

const setPid = (pId) => {
  return (dispatch) => {
    dispatch(setPidAC(pId));
  };
};

const toggleFormPost = formPost => {
  return dispatch => dispatch(toggleFormPostAC(formPost));
}

const CommodityContainer = connect(mapState, {
  getGroups,
  getProducts,
  setPid,
  setViewForm,
  getProductId,
  setFormData,
  toggleFormPost,
  postFormData
})(Commodity);

export default CommodityContainer;
