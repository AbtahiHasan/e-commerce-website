import React from 'react';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Products from '../components/Products';
import ProductSidebar from '../components/ProductSidebar';



const Shop = () => {
    return (
        <div>
            <Nav/>
            <ProductSidebar products={<Products/>}/>
            
            <Footer/>
        </div>
    );
};

export default Shop;