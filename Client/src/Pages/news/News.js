import React, { Component } from 'react';
import NewsItem from './News Item';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    articles = []
    static defaultprop = {
        country: 'in',
        page: 1,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        page: PropTypes.number,
        category: PropTypes.string
    }
    capitalization = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title = "News"
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.articles)
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults
        })
    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalArticles: parsedData.totalResults
        })
    }

    render() {
        return (
            <div>
                <h2 className='text-center mt-4'>News Headlines</h2>
                {this.state.loading && <Loading />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Loading />}>
                    <div className="container my-2">
                        <div className="row my-4">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className='col md-4 my-3'>
                                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}