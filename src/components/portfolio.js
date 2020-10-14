import React, {useState} from "react";

const Portfolio = () => {
  const [list] = useState([
    {
      id: 100,
      title: "AzimPakhsh",
      description: "AzimPakhsh is an online market. ",
      link: "http://azimpakhsh.com/",
      imgSrc: "images/httpazimpakhs.png"
    },
    {
      id: 101,
      title: "pergasjoosh",
      description: "pergasjoosh is welding Company. ",
      link: "http://azimpakhsh.com/",
      imgSrc: "images/pergasjoosh.png"
    }
  ])
  return (
    <section id="portfolio" className="container-fluid py-5">
      <div className="row">
        <div className="col-sm-12 py-3 text-center">
          <h2> Portfolio </h2>
        </div>
      </div>
      <div className="row">
      <div className="col-sm-10 cardsContainer" >
        {list.map(item => {
          return (
              <div className=" col-sm-4" key={item.id}>
                <div className="card">
                  <div className="imageContainer"> 
                    <img
                      className="card-img-top"
                      src={item.imgSrc}
                      alt="portfolio-todoapp"
                    />
                  </div>
                  <div className="card-body">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        className="btn btn-secondary stretched-link"
                      >
                        Watch
                      </a>
                  </div>  
                </div> 
              </div>
            
          )
        })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
