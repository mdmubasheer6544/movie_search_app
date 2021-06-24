import React,{useEffect} from 'react';
import Categories from '../Categories/Categories';
import Trending from '../Trending/Trending';

const FirstPage = () => {
    return (
        <>
          <Trending/>
          <Categories/>  
        </>
    );
};

export default FirstPage;