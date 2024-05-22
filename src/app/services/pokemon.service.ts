import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(page: number, size: number = 40): Promise<Resultado[]> {
    const offset = size * (page);
    console.log(offset);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`);
    const resJson = await res.json();
    console.log(resJson.results);
    return resJson.results;
  }

  async getById(id:string):Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();
  }

  getByDescription() {

  }
}
