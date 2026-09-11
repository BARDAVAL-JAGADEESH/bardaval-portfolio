import { portfolioData } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  const { personal } = portfolioData

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} {personal.name}
        </p>
        <p>{personal.headline}</p>
      </div>
    </footer>
  )
}
