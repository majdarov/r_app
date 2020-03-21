import Commodity from "./Commdoity";
import { setPidAC } from "../../redux/commodityReduser";
import { connect } from "react-redux";
import { fetchData } from "./fetchData";

const mapState = state => {
  state = state.commodityPage;
  return {
    dataServer: state.dataServer,
    isLoaded: state.isLoaded,
    groups: state.groups,
    price: "Price",
    pid: state.pid,
    commodities: state.commodities,
    comIsLoaded: state.comIsLoaded,
    error: state.error
  };
};

const mapDispatch = dispatch => {
  return {
    setPid: pid => dispatch(setPidAC(pid)),
    receiveData: (dataServer, headers) =>
      fetchData(dataServer, headers, dispatch)
  };
};

const CommodityContainer = connect(mapState, mapDispatch)(Commodity);

export default CommodityContainer;
