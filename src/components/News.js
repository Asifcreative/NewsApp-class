import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import { Component } from 'react';

// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    articles = [
        {
            "source": { "id": "cnn", "name": "CNN" }
            , "author": "Madeline Holcombe, CNN",
            "title": "Hospitalization rates are down across the US, but these 8 states still have fewer than 15% of ICU beds available - CNN",
            "description": "While much of the US is seeing a decline in hospitalizations for Covid-19, it's also evident the fight against the pandemic is far from over as eight states are reporting limited numbers of available ICU beds.",
            "url": "https://www.cnn.com/2021/10/06/health/us-coronavirus-wednesday/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211006025426-covid-19-icu-file-090221-california-super-tease.jpg",
            "publishedAt": "2021-10-06T07:34:00Z",
            "content": "(CNN)While much of the US is seeing a decline in hospitalizations for Covid-19, it's also evident the fight against the pandemic is far from over as eight states are reporting limited numbers of avai… [+5367 chars]"
        },
        {
            "source": { "id": null, "name": "ESPN" },
            "author": "Joon Lee",
            "title": "Yankees manager Aaron Boone 'at peace' with future up in air as New York's season ends - ESPN",
            "description": "With Yankees manager Aaron Boone's contract up at the conclusion of this season, his job status remains in question.",
            "url": "https://www.espn.com/mlb/story/_/id/32346452/yankees-manager-aaron-boone-peace-future-air-new-york-season-ends",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1006%2Fr918927_1296x729_16%2D9.jpg",
            "publishedAt": "2021-10-06T06:01:36Z",
            "content": "BOSTON -- As the New York Yankees' season came to an end at the hands of the Boston Red Sox in Tuesday night's American League Wild Card Game, the spotlight shifted to manager Aaron Boone's contract … [+3171 chars]"
        },
        {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": null,
            "title": "New Zealand raises rates for first time in seven years, more to come - Reuters",
            "description": "New Zealand's central bank hiked interest rates on Wednesday for the first time in seven years and signalled further tightening to come, as it looks to get on top of inflationary pressures and cool a red-hot housing market.",
            "url": "https://www.reuters.com/world/asia-pacific/new-zealand-raises-interest-rates-more-tightening-come-2021-10-06/", "urlToImage": "https://www.reuters.com/resizer/90MfTKgvLxLYSp5X8ECspYSeRFU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XOW7UP5RUZJNNKPGT7AV623JOU.jpg",
            "publishedAt": "2021-10-06T04:04:00Z",
            "content": "Pedestrians walk near the main entrance to the Reserve Bank of New Zealand located in central Wellington, New Zealand, July 3, 2017. REUTERS/David Gray/File PhotoWELLINGTON, Oct 6 (Reuters) - New Zea… [+3342 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Taiyler Simone Mitchell",
            "title": "Grisham: Kushner, Ivanka Trump thought they were 'shadow' president, first lady - Business Insider",
            "description": "In a new book, Stephanie Grisham, who worked for both Donald and Melania Trump, refers to Jared Kushner as \"Rasputin in a slim suit.\"",
            "url": "https://www.businessinsider.com/grisham-says-kushner-navigate-white-house-without-being-challenged-2021-10",
            "urlToImage": "https://i.insider.com/615cfb9a1725d20018b7f9e0?width=1200&format=jpeg",
            "publishedAt": "2021-10-06T03:45:00Z",
            "content": "Former press secretary to Donald Trump, Stephanie Grisham, said in a new interview on CNN's \"New Day\" that Jared Kushner was able to navigate the White House freely without being checked or \"challeng… [+1648 chars]"
        },
        {
            "source": { "id": null, "name": "Yahoo Entertainment" },
            "author": "Nate Day",
            "title": "Britney Spears says family would 'f--k with' her amid conservatorship, thanks attorney for changing her life - Yahoo News",
            "description": "Britney Spears has slammed her family in a new Instagram post, claiming they would \"f--k with\" her by apologizing for her conservatorship.",
            "url": "https://news.yahoo.com/britney-spears-says-family-apos-013604773.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ycCOjLhcwoXdiSlPSRspvA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/uu/api/res/1.2/CHZHd1P.HicdioUPTB_v_A--~B/aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/fox_news_text_979/128c85829173ade0767f548efcd391d0",
            "publishedAt": "2021-10-06T03:41:20Z",
            "content": "Britney Spears is speaking out about her family.\r\nJust days after her father, Jamie Spears, was suspended as her conservator, the 39-year-old pop star has taken to Instagram to address the way her fa… [+3067 chars]"
        },
        {
            "source": { "id": null, "name": "NDTV News" },
            "author": null,
            "title": "\"Wish Steve Could See\": Tim Cook's Staff Memo To Apple Employees - NDTV",
            "description": "On the 10th anniversary of Steve Jobs's death, Apple Inc. Chief Executive Officer Tim Cook told employees that the visionary co-founder would be eager to see what the company develops next.",
            "url": "https://www.ndtv.com/world-news/wish-steve-could-see-tim-cooks-staff-memo-to-apple-employees-2565320", "urlToImage": "https://c.ndtvimg.com/2021-10/g3i3uhas_steve-jobs-bloomberg_625x300_06_October_21.jpg",
            "publishedAt": "2021-10-06T03:27:39Z",
            "content": "Steve Jobs died in October 2011 at the age of 56.\r\nOn the 10th anniversary of Steve Jobs's death, Apple Inc. Chief Executive Officer Tim Cook told employees that the visionary co-founder would be eag… [+2337 chars]"
        }]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    // const handlePrevClick = () => {
    //     setPage(page - 1)
    //     updateNews();
    // }
    // const handleNextClick = () => {
    //     setPage(page + 1)
    //     updateNews();
    // }
  
    render() {
        return (
            <>
                <div className="container my-4">
                    {/* <h2 className="my-3" style={{ margin: '35px 0px', marginTop: '80px' }}>NewsApp - Top {capitalizeFirstLetter(this.props.category)} Headlines</h2>
                    {loading && <Spinner />} */}
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    console.log(element);
                                    return <div className="col-md-6" key={element.url}>
                                        <Newsitems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                            {/* <div>
                                <Pagination
                                    page={page}
                                    itemsCountPerPage={8}
                                    totalItemsCount={totalResults}
                                    pageRangeDisplayed={5}
                                    onChange={handlePageChange}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activeClass="active"
                                    prevPageText="Previous"
                                    nextPageText="Next"
                                />
                            </div> */}


                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-dark" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="row my-3">
                                <h3>Advertisment</h3>
                                <div className="card mt-2">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/kfc-fck.png?width=600&name=kfc-fck.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Your Add here</h5>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <img src="https://www.designhill.com/design-blog/wp-content/uploads/2019/03/7-5.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Your Add here</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h3>Contact Us</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </>

        )
    }
}
export default News
