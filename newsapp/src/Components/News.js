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

    const fetchNews = async (pageNo = 1, append = false) => {
        try {
            props.setProgress(10);
            setLoading(true);

            const originalUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39510d3e035e4d59abfdc51ba94c2a25&page=${pageNo}&pageSize=${props.pageSize}`;
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(originalUrl)}`;

            let response = await fetch(proxyUrl);
            props.setProgress(30);
            let data = await response.json();
            let parsedData = JSON.parse(data.contents);

            setArticles((prevArticles) => append ? [...prevArticles, ...(parsedData.articles || [])] : parsedData.articles || []);
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
        fetchNews();
        // eslint-disable-next-line
    }, [props.category]);

    const fetchMoreData = () => {
        fetchNews(page + 1, true);
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
