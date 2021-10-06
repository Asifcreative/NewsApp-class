import React, { useEffect, useState } from 'react'
import NewsSliderItems from './NewsSliderItems'
import PropTypes from 'prop-types'
import Newsitems2 from './Newsitems2';
import { Component } from 'react';

export class NewsSlider extends Component {
    articles = [
        {"source":{"id":"the-verge","name":"The Verge"},"author":"Thomas Ricker","title":"Polar’s Grit X multisport watch goes Pro - The Verge","description":"Polar’s Grit X Pro multisport watch has a hard sapphirelens and a durable FKM band. There’s also a lighter-weight titanium model for $599.99. The Vantage V2 is getting a software update and quick-change strap mechanism.","url":"https://www.theverge.com/2021/10/6/22710376/polar-grit-x-pro-hands-on-multisport-watch-price-date","urlToImage":"https://cdn.vox-cdn.com/thumbor/_x-K88akTxIbWWLBukbqlvtPcts=/0x119:2040x1187/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22902128/verge_DSC_6507__1__2040pxl.jpg","publishedAt":"2021-10-06T09:00:00Z","content":"Vantage V2 and Polar Unite also see tweaks\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nThe Polar Grit X Pro (shown in copper colorway) feature… [+4130 chars]"},
        {"source":{"id":"the-verge","name":"The Verge"},"author":"Jon Porter","title":"HMD’s Nokia is getting into Android tablets with the $249.99 T20 - The Verge","description":"HMD is releasing its first Android tablet under the Nokia brand name. The T20 starts at $249.99 in the US where it will be available from November 17th, while in the UK the tablet will be available from today starting at £179.99.","url":"https://www.theverge.com/2021/10/6/22711065/hmd-nokia-t20-android-tablet-10-4-inch-screen","urlToImage":"https://cdn.vox-cdn.com/thumbor/p1ZNPdK90tlbZUxm7djiq5noFbY=/0x605:8448x5028/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22902857/Nokia_T20_00000269_v1.jpg","publishedAt":"2021-10-06T09:00:00Z","content":"A 10.4-inch tablet with three years of security updates\r\nThe 10.4-inch tablet.\r\nImage: HMD\r\nAfter years of focusing on phones, HMD is releasing its first Android tablet under the Nokia brand name som… [+2082 chars]"},
        {"source":{"id":null,"name":"Video Games Chronicle"},"author":"Chris Scullion","title":"The entirety of Twitch has reportedly been leaked - Video Games Chronicle","description":"Source codes and user payouts among the data released in a 128GB torrent…","url":"https://www.videogameschronicle.com/news/the-entirety-of-twitch-has-reportedly-been-leaked/","urlToImage":"https://www.videogameschronicle.com/files/2021/09/twitch-logo.jpg","publishedAt":"2021-10-06T08:19:40Z","content":"An anonymous hacker claims to have leaked the entirety of Twitch, including its source code and user payout information.\r\nThe user posted a 125GB torrent link to 4chan on Wednesday, stating that the … [+4251 chars]"},
        {"source":{"id":null,"name":"YouTube"},"author":null,"title":"Battlefield 2042 - Conquest 64 VS 64 PC Gameplay - IGN","description":"Prepare yourself for all-out warfare with this Battlefield 2042 Conquest 64 VS 64 gameplay video! Featuring Battlefield's newest map, Orbital, this 128 playe...","url":"https://www.youtube.com/watch?v=2nCyiE_pBHs","urlToImage":"https://i.ytimg.com/vi/2nCyiE_pBHs/maxresdefault.jpg","publishedAt":"2021-10-06T07:00:01Z","content":null},
        {"source":{"id":"engadget","name":"Engadget"},"author":"https://www.engadget.com/about/editors/steve-dent","title":"Canon created a dual fisheye lens for its new VR video system - Engadget","description":"Canon has made a surprising product announcement, revealing a dual, RF mount fisheye lens that's part of an all-new system called Canon EOS VR..","url":"https://www.engadget.com/canon-introduces-its-new-vr-system-with-a-dual-fisheye-lens-040837782.html","urlToImage":"https://s.yimg.com/os/creatr-uploaded-images/2021-10/a3515aa0-265b-11ec-bbfe-c1cc52ba2922","publishedAt":"2021-10-06T04:49:03Z","content":"Canon has made a surprising product announcement, revealing a dual, RF mount fisheye lens that's part of an all-new system called EOS VR. Its aim is nothing less than to transform virtual reality (VR… [+4725 chars]"},
        {"source":{"id":null,"name":"Nintendo Life"},"author":"Liam Doolan","title":"This Is What Kirby's New Kingdom Hearts Form Looks Like In Smash Bros. Ultimate - Nintendo Life","description":"He's ready to join Mickey and the gang","url":"https://www.nintendolife.com/news/2021/10/this-is-what-kirbys-new-kingdom-hearts-form-looks-like-in-smash-bros-ultimate","urlToImage":"https://images.nintendolife.com/971b5a7b80567/1280x720.jpg","publishedAt":"2021-10-06T04:30:00Z","content":null},{"source":{"id":"engadget","name":"Engadget"},"author":"https://www.engadget.com/about/editors/igor-bonifacic","title":"Former Sennheiser engineer Axel Grell made a $200 pair of ANC true wireless earbuds - Engadget","description":"Set to cost $200 when they go on sale next month, they feature components individually sourced and designed by Grell..","url":"https://www.engadget.com/grell-audio-tws-1-earbuds-annoucement-040050084.html","urlToImage":"https://s.yimg.com/os/creatr-uploaded-images/2021-10/b6c614d0-261b-11ec-bbf7-babcb6c01bca","publishedAt":"2021-10-06T04:01:49Z","content":"In 2019, Axel Grell, the designer of Sennheisers legendary HD580 and HD800 headphones, left the company to found Grell Audio. Two years later, the startup is coming out with a pair of true wireless h… [+1060 chars]"},
        {"source":{"id":null,"name":"NDTV News"},"author":null,"title":"\"Wish Steve Could See\": Tim Cook's Staff Memo To Apple Employees - NDTV","description":"On the 10th anniversary of Steve Jobs's death, Apple Inc. Chief Executive Officer Tim Cook told employees that the visionary co-founder would be eager to see what the company develops next.","url":"https://www.ndtv.com/world-news/wish-steve-could-see-tim-cooks-staff-memo-to-apple-employees-2565320","urlToImage":"https://c.ndtvimg.com/2021-10/g3i3uhas_steve-jobs-bloomberg_625x300_06_October_21.jpg","publishedAt":"2021-10-06T03:27:39Z","content":"Steve Jobs died in October 2011 at the age of 56.\r\nOn the 10th anniversary of Steve Jobs's death, Apple Inc. Chief Executive Officer Tim Cook told employees that the visionary co-founder would be eag… [+2337 chars]"}]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0,
            selectedIndex: this.selectedIndex,

        }
    }
    selectedIndex = 0;


    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="row">
                        <div className="col-md-3">
                            {this.state.articles.map((element, index) => {
                                if (index === 0) {
                                    return <div className="row" key={element.url}>
                                        <Newsitems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                } if (index === 1) {
                                    return <div className="row" key={element.url}>
                                        <Newsitems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                }
                            })}

                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                        {this.state.articles.map((element, pos) => {
                                            console.log(pos);
                                        return <div className={`element ${this.selectedIndex === pos ? "carousel-item active" : "carousel-item"}`}
                                            key={element.url}
                                        >
                                            <NewsSliderItems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                        </div>
                                    })}

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            {this.state.articles.map((element, pos) => {
                                if (pos === 2) {
                                    return <div className="row" key={element.url}>
                                        <Newsitems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                } if (pos === 3) {
                                    return <div className="row" key={element.url}>
                                        <Newsitems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                }
                            })}

                        </div>
                    </div>

                </div>


            </>

        )
    }
}


export default NewsSlider
