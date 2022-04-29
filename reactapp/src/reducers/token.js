export default function (token = [], action) {
  if (action.type == "toki") {
    var newToken = token;
    return newToken;
  } else {
    return token;
  }
}
