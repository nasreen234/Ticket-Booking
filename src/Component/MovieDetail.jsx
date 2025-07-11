    import { useParams,Link } from 'react-router-dom';
    import { useEffect, useState,useContext } from 'react';
    import { CartContext } from '../Context/CartContext';
    import { useNavigate } from 'react-router-dom';
    import Navbar from './Navbar';
    import { toast } from 'react-toastify';


    const MovieDetail = () => {
      const {_id} = useParams();
      const [movie, setMovie] = useState(null);
      const { updateCart } = useContext(CartContext);
      const navigate = useNavigate();


      useEffect(() => {
  
        fetch(`https://backend-crud-one.vercel.app/product/${_id}`)
          .then((res) => res.json())
          .then((data) => setMovie(data))
          .catch((err) => {
      
      });
     }, [_id]);

      if (!movie) return <h3 className="text-center mt-5">Loading...</h3>;

      return ( 
        <>
        <Navbar />
        <div className="container">
        
          <div className="row justify-content-center align-items-center">
            
              <div className="col-md-4 mb-4">
          <img
            src={movie.image}
            alt={movie.name}
            style={{ width: '100%', height: '500px', objectFit: 'contain',backgroundColor:'white',borderRadius:'10px' }}
          />
          </div>
          <div className='col-md-8 col-sm-12 '>
          <div style={{ padding: '100px', backgroundColor: 'white',color:'black', borderRadius: '10px', textAlign:'center' }}>
          <p className="text-center fw-bold fs-5">{movie.title}</p>
    
          <p><strong>🎬 TITLE:</strong> {movie.title}</p>
          <p><strong>🎟️ TICKET PRICE:</strong> ₹{movie.ticketprice}</p>
          <p><strong>🗓️ RELEASE DATE:</strong> {movie.releasedate}</p>
          <p><strong>🎬 DIRECTOR:</strong> {movie.director}</p>
          <p><strong>💰 BUDGET:</strong> {movie.budget}</p>
          <p><strong>📌 DESCRIPTION: </strong>{movie.description}</p>
          
           
           <button className="btn btn-success w-30 ms-4 zoom-button"
           onClick={() => navigate(`/home`)}>Back</button>
            
             <button className= "btn btn-success w-30 ms-4 zoom-button"
             onClick={() =>{
              updateCart('add',movie);
             toast.success(`${movie.title} added to cart!`);
               navigate(`/cart`)
              }}>
             Add to Cart
          </button>
        
          
           
        </div>
        </div>
        </div>
        </div>
        
        </>
        
      );
    };

    export default MovieDetail;


