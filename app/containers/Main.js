import { connect } from "react-redux"
import Main from "../components/main"


const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    main: state.main,
  }
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainApp