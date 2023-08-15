import '../styles/navbar.css'

export const Navbar = () => {
  return <div className="navbar">
      <div>Режимы работы</div>
      <div className="navbar_list">
          <div className="navbar_list-item">Рисовать</div>
          <div className="navbar_list-item">Работать с кадрами</div>
          <div className="navbar_list-item">Сохранить</div>
      </div>
  </div>
}
