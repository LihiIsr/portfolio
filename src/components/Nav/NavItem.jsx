export default function NavItem({text, onChoose,closeNav}) {

  const handleClick = () => {
    onChoose();
    closeNav();
  }

  return (
    <div className='nav-item' onClick={handleClick}>
      {text}
    </div>
  )
}
