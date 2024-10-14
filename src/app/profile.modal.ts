export class Profile {
  public edit = false;
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public age: number
  ) {}
}
