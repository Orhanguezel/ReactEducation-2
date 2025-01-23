import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/*Sayfa yenilenmiyor. cok hizli */}
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Outlet context={{hello: "World"}}/>
    </div>
  )
}

export default Layout
