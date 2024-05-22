import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  @ViewChild('tarjetas') tarjetasElement!: ElementRef;

  pokemonList:Resultado[] = [];

  page: number = 0;
  loading: boolean = false;

  async ngOnInit(): Promise<void> {
    await this.loadPage();
    this.pokemonService.getById("1");
  }

  async loadPage(): Promise<void> {
    if (this.loading) return;
      this.loading = true;
      const pokemonService = await this.pokemonService.getByPage(this.page);
      this.pokemonList = [...this.pokemonList, ...pokemonService];
      this.page++;
      this.loading = false;
  }

  onScroll(e:any) {
    console.log(e);
    if (Math.round (this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop)
      === e.srcElement.scrollHeight) {
        this.loadPage();
      }
  }

  tarjetaSeleccionada(event: string) {
    console.log(event);
  }
}
