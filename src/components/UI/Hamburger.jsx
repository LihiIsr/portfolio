export default function Hamburger({ isOpen }){
    return(
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style>{`
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }

                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: black;
                    transform-origin: center;
                    transition: all 0.3s linear;
                }

               .burger1 {
    transform: ${isOpen
      ? 'translateY(0.65rem) rotate(45deg)'
      : 'translateY(0) rotate(0)'
    };
}

.burger2 {
    opacity: ${isOpen ? 0 : 1};
    transform: ${isOpen ? 'scaleX(0)' : 'scaleX(1)'};
}

.burger3 {
    transform: ${isOpen
      ? 'translateY(-0.65rem) rotate(-45deg)'
      : 'translateY(0) rotate(0)'
    };
}


}

                
            `}</style>
        </>
    )
}