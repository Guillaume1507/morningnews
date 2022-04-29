export default function (langue = "fr", action) {
  if (action.type == "langue") {
    var newLangue = "it";
    return newLangue;
  } else {
    return langue;
  }
}
