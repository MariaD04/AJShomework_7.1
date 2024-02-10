export default class Validator {
  constructor(name) {
    this.validateUsername(name);
  }

  validateUsername(name) {
    const result = (/^[a-z](?!.*\d{4,})[\w-_\d]*[a-z]$/i).test(name);
    if (result) {
      this.name = name;
    } else {
      throw new Error('Incorrect name');
    }
  }
}
