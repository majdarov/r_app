import Commodity from "./Commodity";
import { setPid, getGroups, getProducts } from "../../redux/commodityReduser";
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
    error: state.error
  };
};

const CommodityContainer = connect(mapState, { getGroups, getProducts, setPid })(Commodity);

export default CommodityContainer;
