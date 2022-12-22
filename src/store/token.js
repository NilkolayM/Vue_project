class MyToken {
  token;
  constructor(data) {
    this.token = data;
  }
  get token() {
    return this.token;
  }
  set token(data) {
    this.token = data;
  }
}

export default MyToken;
