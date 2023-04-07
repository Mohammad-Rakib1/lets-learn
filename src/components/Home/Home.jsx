import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import { useContext } from 'react';
import Root, { LoaderContext } from '../Root/Root';

const Home = () => {
    const data = useContext(LoaderContext).data;
    
    return (
            <div className="m-auto mt-5 container row row-cols-1 row-cols-md-2 g-4">
                {
                    data.map(product => <Products product={product} key={product.id}></Products>)
                }
            </div>
    );
};

export default Home;