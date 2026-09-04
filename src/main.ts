import { Game } from './domain/Game'
import { GamesList } from './domain/GamesList'

const gamesList = new GamesList()

function gameCard(game: Game): string {
  return `
    <div class="col">
      <div class="card h-100">
        <img
          src="${game.cover}"
          class="card-img-top"
          style="height: 240px; object-fit: cover;"
          alt="${game.title}"
        />
        <div class="card-body">
          <span class="badge bg-primary mb-2">${game.genre}</span>
          <h5 class="card-title">${game.title}</h5>
          <p class="card-text text-muted">${game.developer}, ${game.year}</p>
        </div>
      </div>
    </div>
  `
}

function renderCards(games: Game[]): void {
  const grid = document.querySelector<HTMLDivElement>('#grid')!
  grid.innerHTML = games.map(gameCard).join('')
}

function updateCounter(_count: number): void {
  const el = document.querySelector<HTMLSpanElement>('#count')!
  el.textContent = _count.toString();
}

function getGenres(): string[] {
  const all = gamesList.filterByGenre('All').map((g) => g.genre)
  return ['All', ...new Set(all)]
}

function renderFilters(activeGenre: string): void {
  const container = document.querySelector<HTMLDivElement>('#filters')!
  container.innerHTML = getGenres()
    .map((genre) => {
      const active = genre === activeGenre ? 'btn-dark' : 'btn-outline-dark'
      return `<button class="btn btn-sm ${active}" data-genre="${genre}">${genre}</button>`
    })
    .join('')

  container.querySelectorAll<HTMLButtonElement>('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const genre = btn.dataset.genre ?? 'All'
      const filtered = gamesList.filterByGenre(genre)
      renderCards(filtered)
      renderFilters(genre)
      updateCounter(filtered.length)
    })
  })
}


const allGames = gamesList.filterByGenre('All')
renderCards(allGames)
renderFilters('All')
updateCounter(allGames.length)
