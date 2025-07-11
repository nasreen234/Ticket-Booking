import { useState, useEffect,useContext } from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { SearchContext } from '../Context/SearchContext';
import Owl from './Owl'




const Home = () => {
  const [data, setData] = useState([]);
 const { searchTerm } = useContext(SearchContext);


  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  
        setData(data);
      });
  }, []);

   const filteredMovies = data.filter(movie =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <>
    <Navbar />
    <Owl/>
 
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>🎬 Movie List</h2>
      <div style={{ padding: '20px' }}>
        <div className="row g-3 mb-3" justify="center" align="top">
          {filteredMovies.map((movie) => (
            <div   key={movie._id}className="col-xs-12 col-sm-6 col-md-4 col-lg-3">

              <MovieCard
                _id={movie._id}
                image={movie.image}
                name={movie.name}
                ticketprice={movie.ticketprice}
                title={movie.title}
                releasedate={movie.releasedate}
                director={movie.director}
                budget={movie.budget}
              />

              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

/*const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then((res) => res.json()) // wait for response and convert it to JSON
      .then((data) => {
        console.log(data);
        setData(data);   // update the state with the fetched data
      });
  }, []);

  return (
    <>
      <h2 className="text-center mt-5">Movie List</h2>
      <div className="container">
        <div className="row">
          {data.map((movie) => (
            <div className="col-md-3" key={movie._id} style={{ marginBottom: "20px" }}>
              <div className="card h-100">
                <div  className="card-img-top ">
                <img
                  src={movie.image}
                  alt={movie.name}
                    style={{ height: "250px", width:"100%", objectFit: "contain" }}>

                    </img>

                   </div>


                <div className="card-body">
                  <h5 className="card-title text-center">
                   <p><strong>{movie.name}</strong> </p>
                    <p>Price :₹ {movie.ticketprice}</p>
                  </h5>
                  <p className="card-text"><b>Title:</b> {movie.title}</p>
                  <p className="card-text"><b>Release Date:</b> {movie.releasedate}</p>
                  <p className="card-text"><b>Director:</b> {movie.director}</p>
                  <p className="card-text"><b>Budget:</b> {movie.budget}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;*/

//import { useState, useEffect } from 'react';
//import MovieCard from './Component/MovieCard'; 



/*const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <h2 className="text-center mt-5">Movie List</h2>
      <div style={{ padding: '0 20px' }}>
        <div className="container">
          <div className="Row">

            {data.map((movie) => (  key={movie._id}
              <MovieCard>

                <div className="col-md-3">


                

                  image={movie.image}
                  name={movie.name}
                  ticketprice={movie.ticketprice}
                  title={movie.title}
                  releasedate={movie.releasedate}
                  director={movie.director}
                  budget={movie.budget}

                </div>
              </MovieCard>
          </div>
        </div>
      </div>
        ))}


    </>
  );
};

export default Home;*/


