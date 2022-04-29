export default function (langue = "", action) {
  if (action.type == "changeLangue") {
    var newLangue = action.pays;
    return newLangue;
  } else {
    return langue;
  }
}
