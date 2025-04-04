import "@flaticon/flaticon-uicons/css/all/all.css";

function Componente4() {
  return (
    <>
    <div className="Componente4">
        <ul>
            <li class="list active">
                <a href='#'>
                    <span class="icon"><i class="fi fi-sr-home"></i></span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list">
                <a href='#'>
                    <span class="icon"><i class="fi fi-bs-signal-alt-2"></i></span>
                    <span class="text">Investments</span>
                </a>
            </li>
            <li class="list">
                <a href='#'>
                    <span class="icon"><i class="fi fi-sr-folder"></i></span>
                    <span class="text">My Projects</span>
                </a>
            </li>
            <li class="list">
                <a href='#'>
                    <span class="icon"><i class="fi fi-sr-flask-gear"></i></span>
                    <span class="text">Simulators</span>
                </a>
            </li>
            <li class="list">
                <a href='#'>
                    <span class="icon"><i class="fi fi-br-sign-out-alt"></i></span>
                    <span class="text">Logout</span>
                </a>
            </li >
            <div className="indicator"></div>
        </ul>
    </div>
    <script>
        cont list = document.querySelectorAll('.list');
        function activeLink() {
    </script>
    </>
  );
}

export default Componente4;
