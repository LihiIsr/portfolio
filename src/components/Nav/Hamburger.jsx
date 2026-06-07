import './Nav.css';
export default function Hamburger({ isOpen }) {
  return (
    <div className={`hamburger-icon ${isOpen ? "open" : ""}`}>
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </div>
  );
}