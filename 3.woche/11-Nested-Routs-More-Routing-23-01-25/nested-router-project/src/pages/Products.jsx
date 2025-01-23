
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h2>Ürünler</h2>
      <p>Ürün kategorilerimizi keşfedin:</p>
      <nav>
        <ul>
          <li>
            <Link to="electronics">Elektronik</Link>
          </li>
          <li>
            <Link to="clothing">Giyim</Link>
          </li>
        </ul>
      </nav>
      {/* Alt rotalar burada render edilecek */}
      <Outlet />
    </div>
  );
}

export default Products;
