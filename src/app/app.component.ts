import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FotoPokemonComponent } from './components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './components/tarjeta-pokemon/tarjeta-pokemon.component';
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FotoPokemonComponent, TarjetaPokemonComponent, DetallePokemonComponent, HomeComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPokedex';
}
