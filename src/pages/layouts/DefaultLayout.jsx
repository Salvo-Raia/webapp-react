// Imports
import { Outlet } from "react-router-dom";

export default function DefaulLayout() {
  return (
    <>
      <header>Navbar</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
