export class Heart {
  constructor (
    public full: boolean,
    public urlFullHeart: string = '/assets/coracao_cheio.png',
    public urlEmptyHeart: string = '/assets/coracao_vazio.png'
  ){}

  public showHearts(): string {
    console.log('Full', this.full)
    return this.full ? this.urlFullHeart : this.urlEmptyHeart
  }
}
