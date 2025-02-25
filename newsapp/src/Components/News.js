import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(1);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async (pageNo = 1) => {
        try {
            props.setProgress(10);
            setLoading(true);
            
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=YOUR_API_KEY&page=${pageNo}&pageSize=${props.pageSize}`;
            
            let response = await fetch(url);
            props.setProgress(30);
            let parsedData = await response.json();

            setArticles(parsedData.articles || []);
            setTotalResults(parsedData.totalResults || 0);
            setPage(pageNo);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - RealityTimes`;
        updateNews();
        // eslint-disable-next-line
    }, [props.category]);

    const fetchMoreData = async () => {
        try {
            const nextPage = page + 1;
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=YOUR_API_KEY&page=${nextPage}&pageSize=${props.pageSize}`;

            let response = await fetch(url);
            let parsedData = await response.json();

            setArticles((prevArticles) => [...prevArticles, ...(parsedData.articles || [])]);
            setTotalResults(parsedData.totalResults || totalResults);
            setPage(nextPage);
        } catch (error) {
            console.error("Error fetching more news:", error);
        }
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '0px' }}>
                RealityTimes - Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles?.length || 0}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className="row">
                        {articles.map((element, index) => (
                            <div className="col-md-4" key={element.url || index}>
                                <NewsItem
                                    title={element.title || "No Title"}
                                    description={element.description || "No Description Available"}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author || "Unknown"}
                                    date={element.publishedAt || "Unknown Date"}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
};

export default News;
