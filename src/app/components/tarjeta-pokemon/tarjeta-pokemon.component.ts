import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.css'
})

export class TarjetaPokemonComponent implements OnChanges {
  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.extractInfo();
  }

  @Input() data?:Resultado;
  @Output() clicked = new EventEmitter<string>();

  id:string="0";

  extractInfo() {
    if (this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemonService.getById(this.id);
    }
  }

  emitClick() {
    if (this.id) {
      this.clicked.emit(this.id);
    }
  }
}
