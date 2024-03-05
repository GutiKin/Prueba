document.getElementById('header').innerHTML = `
<header>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="img/bootstrap-logo-white.svg" alt="" width="10%" id="logo"> 
      <span id="logo">Taller Final</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="dashboard.html">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick=mostrar(1)>Ejercicio 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick=mostrar(2)>Ejercicio 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick=mostrar(3)>Ejercicio 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick=mostrar(4)>Ejercicio 4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick=mostrar(5)>Ejercicio 5</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick=mostrar(6)>Ejercicio 6</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick=mostrar(7)>Ejercicio 7</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cerrar Sesión</a>
          </li>
          
        </ul>
        <!-- <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </div>
</nav>
</header>
`;