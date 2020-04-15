export class Citoyen {
  public id;
  public name;
  public postNom;
  public prenom;
  public numberP;
  public genre;
  public email;
  public password;
    constructor({id, name, postNom, prenom, numberP, genre, email, password}){
      this.id = id;
      this.name = name;
      this.postNom = postNom;
      this.prenom = prenom;
      this.numberP = numberP;
      this.genre = genre;
      this.email = email;
      this.password = password;
    }
}
