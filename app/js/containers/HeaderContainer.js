import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = state => ({
  scoreState: state.main
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
