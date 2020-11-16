import Link from 'next/link'
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{
        `
          ul {
            display: flex;
            gap: 1rem;
          }
        `}</style>
    </header>
  );
}

export default Header;