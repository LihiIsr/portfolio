import Tag from '../UI/Tag'

export default function Card(
  {title
  ,text,
  className,
  mostRecent,
  coverImg,
  tags,
  openProject,
  openGitHub
}) {
  return (
    <div className={className}  
      onClick={(e) => {
          if (e.target.closest("a")) return;
          window.open(openProject, "_blank");
        }}  >
      <div className="image-wrapper">
        <img className="card-img" src={coverImg} alt={title} />
      </div>
      <div className='card-text'>
        <h1 className='card-title'>{title}</h1>
        <p style={{textAlign:'left'}}>{text}</p>
        {mostRecent && <p className='most-recent'>#most recent</p>}
        <div className='card-bottom'>
            <div className='card-actions'>
              <a href={openProject} className='card-action'  target="_blank"
                rel="noopener noreferrer">open project</a>
             {openGitHub && <a href={openGitHub} className='card-action'
                target="_blank"
                rel="noopener noreferrer">open on github</a>}
            </div>
            <div className="tags-container">
            {tags.map((tag)=> <Tag key={tag} name={tag}/>)}
            </div>
        </div>
       
      </div>

    </div>
  )
}
