import { Game } from './Game'

export class GamesList {
  private games: Game[] = [
    new Game(
      'The Legend of Zelda: Ocarina of Time',
      1998,
      'Nintendo',
      'Adventure',
      '/zelda-ocarina.jpg',
    ),
    new Game('Street Fighter II', 1991, 'Capcom', 'Fighting', '/street-fighter-ii.png'),
    new Game('Super Mario Bros', 1985, 'Nintendo', 'Platformer', '/super-mario-bros.png'),
    new Game('DOOM', 1993, 'id Software', 'FPS', '/doom.jpg'),
    new Game('Tetris', 1984, 'Alexey Pajitnov', 'Puzzle', '/tetris.png'),
    new Game('Minecraft', 2011, 'Mojang', 'Sandbox', '/minecraft.png'),
  ]

  // TODO: retornar solo los juegos cuyo género coincide con el parámetro genre.
  // Si genre es 'All', retornar todos los juegos.
  // Usá el método .filter(x => condición) del array this.games para filtrar por genre.
  filterByGenre(_genre: string): Game[] {
    const currentGames : Game[] = this.games;
    const games : Game[] = [];
    for (const g of currentGames) {
      if (g.genre === _genre || _genre === 'All') {
        games.push(g);
      }
    }
    return games;
  }

  count(): number {
    return this.games.length
  }
}
