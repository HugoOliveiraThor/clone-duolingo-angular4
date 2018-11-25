import { Component, OnInit } from '@angular/core';

import { Phrase } from '../shared/frase.model'
import { PHRASES } from './phares-mock'
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrases: Phrase[] = PHRASES
  public instruction: string = 'Traduza a frase'
  public answer:string = ''

  public rodada: number = 0
  public rodadaFrase: Phrase

  public progress: number = 0

  constructor() {
    this.updateTurn()
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
    console.log('teste', (<HTMLInputElement>answer.target).value)
  }

  public verifyAnswer(): void {

    if(this.rodadaFrase.phrasePTBR === this.answer){
      alert('A tradução está correta')
      this.rodada++
      this.updateTurn()


      this.progress = this.progress + (100 / this.phrases.length)
    } else {
      alert('A tradução errada')
    }
    // console.log('Verificar resposta', this.answer)

  }

  public updateTurn(): void {
    this.answer = ''
    this.rodadaFrase = this.phrases[this.rodada]
  }

}
