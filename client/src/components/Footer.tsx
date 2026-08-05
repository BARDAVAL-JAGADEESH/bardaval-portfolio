import { profile } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} {profile.name}
        </p>
        <p>Designed & built with React · TypeScript · Node</p>
      </div>
    </footer>
  )
}
