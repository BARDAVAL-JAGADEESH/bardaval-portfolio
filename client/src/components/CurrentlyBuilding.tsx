import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function CurrentlyBuilding() {
  const { currentlyBuilding } = portfolioData

  return (
    <section className="section building" aria-labelledby="building-title">
      <div className="section__inner building__panel">
        <Reveal>
          <div className="building__status">
            <span className="building__pulse" aria-hidden="true" />
            {currentlyBuilding.status}
          </div>
          <p className="section__label">{currentlyBuilding.title}</p>
          <h2 className="building__title" id="building-title">
            {currentlyBuilding.product}
          </h2>
          <p className="section__lede">{currentlyBuilding.note}</p>
          <ul className="building__pillars">
            {currentlyBuilding.pillars.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
