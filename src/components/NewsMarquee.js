import React, { useEffect, useState } from 'react'
import NewsMarqueeItem from './NewsMarqueeItem'
import { Component } from 'react';

class NewsMarquee extends Component {
    articles = [
        {
        "title":"Hum Do Hamare Do Teaser: Kriti Sanon And Rajkummar Rao's Love Story - NDTV Movies",
        "url":"https://www.ndtv.com/entertainment/hum-do-hamare-do-teaser-kriti-sanon-and-rajkummar-raos-love-story-needs-parents-2565727",
        "urlToImage":"https://c.ndtvimg.com/2021-10/a7081sk8_kriti-sanon-_625x300_06_October_21.jpg",
        },
        {
        "title":"Zeeshan Khan announces relationship with Reyhna Pandit with a kiss - Hindustan Times",
        "url":"https://www.hindustantimes.com/entertainment/tv/bigg-boss-ott-s-zeeshan-khan-announces-relationship-with-reyhna-pandit-with-a-kiss-addresses-people-who-have-their-doubts-101633511462610.html",
        "urlToImage":"https://images.hindustantimes.com/img/2021/10/06/1600x900/zeeshan_khan_1633511606949_1633511625285.jpg"},
        {"title":"Mahesh Bhatt: I told Vikram Bhatt, 'Be sure your marriage won’t stay hidden for long' – Exclusive! - Times of India",
        "url":"https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/mahesh-bhatt-i-told-vikram-bhatt-be-sure-your-marriage-wont-stay-hidden-for-long-exclusive/articleshow/86805707.cms",
        "urlToImage":"https://static.toiimg.com/thumb/msid-86805707,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-39158/86805707.jpg"},
        {"title":"Rhea Kapoor celebrates husband Karan Boolani's birthday with kisses and candle-lit dinner in Rajasthan - Hindustan Times",
        "url":"https://www.hindustantimes.com/entertainment/bollywood/rhea-kapoor-celebrates-husband-karan-boolani-s-birthday-with-kisses-and-candle-lit-dinner-in-rajasthan-101633503268300.html",
        "urlToImage":"https://images.hindustantimes.com/img/2021/10/06/1600x900/rhea_kapoor_1633505889533_1633505889640.jpg"},
        {"title":"Infidelity the real reason behind Samantha Ruth Prabhu - Naga Chaitanya's split? - Bollywood Life",
        "url":"https://www.bollywoodlife.com/south-gossip/south-news-and-gossip-infidelity-the-real-reason-behind-samantha-ruth-prabhu-naga-chaitanyas-split-1926747/",
        "urlToImage":"https://st1.bollywoodlife.com/wp-content/uploads/2021/09/Samantha-Naga-baby-600x315.jpg"},
        {"title":"Shamita Shetty Turns Into Shy Bride, Asks Raqesh Bapat to Come to Bigg Boss 15 House - News18",
        "url":"https://www.news18.com/news/movies/shamita-shetty-turns-into-shy-bride-asks-raqesh-bapat-to-come-to-bigg-boss-15-house-4289357.html",
        "urlToImage":"https://images.news18.com/ibnlive/uploads/2021/10/shamita-shetty-and-raqesh-bapat-163350458716x9.jpg"},
        {"title":"Hrithik Roshan showers praise on ex-wife Sussanne Khan as she shows off her office look - Times of India",
        "url":"https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/hrithik-roshan-showers-praise-on-ex-wife-sussanne-khan-as-she-shows-off-her-office-look/articleshow/86803786.cms",
        "urlToImage":"https://static.toiimg.com/thumb/msid-86803786,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-24096/86803786.jpg"},
        {"title":"Valimai Exclusive: Stills and BTS picture goes viral! - Tamil News - IndiaGlitz.com",
        "url":"https://www.indiaglitz.com/thala-ajith-valimai-exclusive-stills-bts-photos-huma-qureshi-yogi-babu-h-vinoth-tamil-news-296189",
        "urlToImage":"https://1847884116.rsc.cdn77.org/tamil/news/valimai061021_6-92f.jpg"}]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0
        }
    }




    render() {
        return (
            <>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-2 newsflash">
                            <span className="flashTitle">News Flash</span>
                        </div>
                        <div className="col-md-10" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '0', backgroundColor: '#ffe0e0' }}>
                            <marquee behavior="" direction="" onMouseOver="" >

                                <div className="d-flex px-5">
                                    {this.state.articles.map((element) => {
                                        return <div key={element.url}>
                                            <NewsMarqueeItem title={element.title ? element.title : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                        </div>
                                    })}
                                </div>

                            </marquee>
                        </div>
                    </div>
                </div>

            </>

        )
    }
    }
    
export default NewsMarquee

