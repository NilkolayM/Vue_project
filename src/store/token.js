class MyToken {
  constructor(data) {
    this.token = data;
  }
  GToken() {
    return this.token;
  }
  SToken(data) {
    this.token = data;
  }
}

let tkn = new MyToken("my_token1");

export function SetToken(data) {
  tkn.SToken(data);
}

export function GetToken() {
  return tkn.GToken();
}
