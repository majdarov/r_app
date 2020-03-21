import Commodity from "./Commdoity";
import { setDataTreeAC, setPidAC, getCommoditiesAC } from "../../redux/commodityReduser";
import { connect } from "react-redux";

const mapState = state => {
  state = state.commodityPage;
  return {
    isLoaded: state.isLoaded,
    data: state.data,
    price: "Price",
    pid: state.pid,
    commodities: state.commodities,
    comIsLoaded: state.comIsLoaded,
    error: state.error
  };
};

const mapDispatch = dispatch => {
  return {
    setData: () => dispatch(setDataTreeAC()),
    setPid: pid => dispatch(setPidAC(pid)),
    getCommodities: () => dispatch(getCommoditiesAC()),
    dispatch
  };
};

const CommodityContainer = connect(mapState, mapDispatch)(Commodity);

export default CommodityContainer;
