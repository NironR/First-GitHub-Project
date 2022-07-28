import React from 'react';
import './SearchPage.css'
import {useStateValue} from "../components/StateProvider.jsx"
import UseGoogleSearch from '../components/useGoogleSearch';
import Response from "../response"
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


const SearchPage = () => {

    const [{term}, dispatch] = useStateValue()
    const {data} = UseGoogleSearch(term)

    // https://cse.google.com/cse/create/new

    console.log(data)

    return (
        <div className='search__page'>
            <div className="search__page--header">
                <Link to="/">
                    <img className="search__page--logo" 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                </Link>

                <div className="search__page--header-body">
                    <Search hideButtons />
                    <div className="search__page--options">
                        <div className="search__page--options-left">
                            <div className="search__page--option">
                                <SearchIcon />
                                <Link to='/news'>News</Link> 
                            </div>
                            <div className="search__page--option">
                                <ImageOutlinedIcon />
                                <Link to='/images'>Images</Link> 
                            </div>
                            <div className="search__page--option">
                                <LocalOfferOutlinedIcon />
                                <Link to='/shopping'>Shopping</Link> 
                            </div>
                            <div className="search__page--option">
                                <RoomOutlinedIcon />
                                <Link to='/maps'>Maps</Link> 
                            </div>
                            <div className="search__page--option">
                                <MoreVertOutlinedIcon />
                                <Link to='/more'>More</Link> 
                            </div>
                        </div>

                        <div className="search__page--options-right">
                            <div className="search__page--option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="search__page--option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="search__page--results">
                    <p className="search__page--result-count">
                        About {data?.searchInformation.
                        formattedTotalResults} 
                        ({data?.searchInformation.
                        formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="search__page--result">
                            <a className="search__page--result-link" href={item.link}>
                                
                                {item.pagemap?.cse_image?.
                                length > 0 &&
                                    item.pagemap?.cse_image
                                    [0]?.src && (
                                        <img className="search__page--result-image"
                                        src={
                                            item.pagemap?.cse_image?.length
                                            > 0 && 
                                            item.pagemap?.cse_image[0]?.src
                                        } alt="" />
                                    )}

                                {item.displayLink}
                            </a>
                            <a href={item.link} className='search__page--result-title'>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="search__page--result-snippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
