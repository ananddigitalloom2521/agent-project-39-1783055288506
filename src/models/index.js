class IndexModel {
  constructor() {
    this.title = 'Hello World';
    this.content = 'Hello, World!';
  }
  getData() {
    return { title: this.title, content: this.content };
  }
}
const indexModel = new IndexModel();
module.exports = indexModel;