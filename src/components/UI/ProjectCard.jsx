import React from 'react'
import Tag from './Tag'

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
    <div className={className}  onClick={() => window.open(openProject, "_blank")}>
      <div className="image-wrapper">
        <img className="card-img" src={coverImg} />
      </div>
      <span className='card-text'>
        <h1 className='card-title'>{title}</h1>
        <p style={{textAlign:'left'}}>{text}</p>
        {mostRecent && <p className='most-recent'>#most recent</p>}
        <span className='card-bottom'>
            <div className='card-actions'>
              <a href={openProject} className='card-action'  target="_blank"
                rel="noopener noreferrer">open project</a>
              <a href={openGitHub} className='card-action'
                target="_blank"
                rel="noopener noreferrer">open on github</a>
            </div>
            <div className="tags-container">
            {tags.map((tag,index)=> <Tag key={index} name={tag}/>)}
            </div>
        </span>
       
      </span>

    </div>
  )
}
