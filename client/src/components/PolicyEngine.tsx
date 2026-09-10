import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function PolicyEngine() {
  const { policyEngine } = portfolioData

  return (
    <section className="section policy" aria-labelledby="policy-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Control plane</p>
          <h2 className="section__title" id="policy-title">
            {policyEngine.title}
          </h2>
          <p className="section__lede">{policyEngine.description}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <ol className="policy__flow">
            {policyEngine.flow.map((step, i) => (
              <li key={step}>
                <span>{step}</span>
                {i < policyEngine.flow.length - 1 && (
                  <span className="policy__arrow" aria-hidden="true">
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="policy__grid">
            {policyEngine.categories.map((cat) => (
              <li key={cat.name} data-cursor="hover">
                <strong>{cat.name}</strong>
                <span>{cat.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
