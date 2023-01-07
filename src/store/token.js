import axios from "axios";
import { AutorizationLink } from "../store/linksAPI.js";
import { UpdateLink } from "../store/linksAPI.js";

const wu = "not_a_user";
const wp = "wrong_password";
const it = "invalid_token";

class MyToken {
  static async LoggingIn(login_in, password_in) {
    var query =
      "?" +
      new URLSearchParams({
        login: login_in,
        password: password_in,
      });

    var tmp;
    await axios
      .get(AutorizationLink + query)
      .then((res) => {
        switch (res.data) {
          case wu:
            {
              tmp = "Пользователь не найден";
            }
            break;
          case wp:
            {
              tmp = "Неверный пароль";
            }
            break;
          default: {
            localStorage.setItem("token", res.data[0].answer);
            if (res.data[0].role == null) {
              tmp = "client";
              localStorage.setItem("role", "client");
            } else {
              tmp = res.data[0].role;
              localStorage.setItem("role", res.data[0].role);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return tmp;
  }

  static async UpdateToken() {
    if (
      localStorage.getItem("token") == "undefined" ||
      localStorage.getItem("token") == null
    )
      return "Пользователь не найден";
    var query =
      "?" +
      new URLSearchParams({
        token: localStorage.getItem("token"),
      });
    var tmp;
    await axios
      .get(UpdateLink + query)
      .then((res) => {
        switch (res.data) {
          case wu:
            {
              localStorage.removeItem("token");
              tmp = "Пользователь не найден";
            }
            break;
          case it:
            {
              localStorage.removeItem("token");
              tmp = "Устаревший токен";
            }
            break;
          default:
            {
              localStorage.setItem("token", res.data);
              tmp = "Успех";
            }
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return tmp;
  }
}

export default MyToken;
