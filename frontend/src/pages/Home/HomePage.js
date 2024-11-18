import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import {
  getAll,
  getAllByTag,
  getAllTags,
  search,
} from '../../services/foodService';
import NotFound from '../../components/NotFound/NotFound';
import Hero from '../../components/HomeMenu/Hero';
import HomeMenu from '../../components/HomeMenu/HomeMenu';
import HomeMenuTitle from '../../components/HomeMenu/HomeMenuTitle';
import AboutUs from '../../components/HomeMenu/AboutUs';
import ContactUs from '../../components/HomeMenu/ContactUs';
import FoodPage from '../Food/FoodPage';

const initialState = { foods: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    case 'TAGS_LOADED':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    // Fetch tags for the filter
    getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

    const loadFoods = tag
      ? getAllByTag(tag) // Load foods by tag if available
      : searchTerm
      ? search(searchTerm) // Load foods based on search term
      : getAll(); // Load all foods by default

    loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
  }, [searchTerm, tag]);

  return (
    <div>
      <Search />
      <Tags tags={tags} />
      {foods.length === 0 && <NotFound linkText="Reset Search" />}
      <Hero />
      <HomeMenuTitle
        subHeader="Check Out"
        Header="Our Best Sellers"
        subSubHeader="Chosen & Loved by Several Foodies !!"
      />
      <HomeMenu />
      <hr className="mt-6" />
      <HomeMenuTitle
        subHeader="Our Story"
        Header="About Us"
        subSubHeader="The Origins of La Boucherie !!"
      />
      <AboutUs />
      <hr className="mt-12" />
      <HomeMenuTitle
        subHeader="Don't Hesitate"
        Header="Contact Us"
        subSubHeader="Always There for Feedback !!"
      />
      <ContactUs />
      <Thumbnails foods={foods} />
    </div>
  );
}
