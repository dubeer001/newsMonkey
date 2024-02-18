import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl,author,date,source } = props;
    return (
      <div className="my-2">
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:1}}>
    {source}

  </span>
          <img
            src={
              !imageUrl
                ? "https://c.ndtvimg.com/2023-08/t4u42tgo_naseem-shah_625x300_26_August_23.jpeg?im=FaceCrop,algorithm=dnn,width=806,height=605"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By : {!author?"Unknown":author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-sn btn-dark">
              Read More
            </a>
            {/* business entertainment general health science sports technology */}
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
