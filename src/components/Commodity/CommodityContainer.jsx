import Commodity from "./Commdoity";
import {
  setDataTreeAC,
  setPidAC,
} from "../../redux/commodityReduser";
import { connect } from "react-redux";
import { fetchCommodities } from "./AsincFunction";

const mapState = state => {
  state = state.commodityPage;
  return {
    dataServer: state.dataServer,
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
    receiveCommodities: (pid, dataServer, headers) => fetchCommodities(pid, dataServer, headers, dispatch),
  };
};

const CommodityContainer = connect(mapState, mapDispatch)(Commodity);

export default CommodityContainer;
