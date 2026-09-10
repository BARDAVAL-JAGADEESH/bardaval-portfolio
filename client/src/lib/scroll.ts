export function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const id = hash.replace('#', '')
  if (!id) {
    window.scrollTo({ top: 0, behavior })
    return
  }

  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior, block: 'start' })
  }
}

export function parseHashPath(to: string) {
  const [pathname, hash = ''] = to.split('#')
  return {
    pathname: pathname || '/',
    hash: hash ? `#${hash}` : '',
  }
}
