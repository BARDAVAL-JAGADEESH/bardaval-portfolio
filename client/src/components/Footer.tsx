import { portfolioData } from '../data/content'

export function Footer() {
  const { personal } = portfolioData
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} {personal.name}
        </p>
        <p>Android Developer · MDM/UEM · Kotlin</p>
      </div>
    </footer>
  )
}
