import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './app.css'

export default function App() {

    interface Person {
        id: number;
        title: string;
        text: string;
        pubDate: string;
    }

    const newsArr: Person[] = [
        {
            id: 1,
            title: '1 News Title',
            text: 'Lorem ipsum dolor, sit amet',
            pubDate: '17.03.2022',
        },
        {
            id: 1,
            title: '2 News Title',
            text: 'Lorem ipsum dolor, sit amet',
            pubDate: '17.03.2022',
        },
        {
            id: 1,
            title: '3 News Title',
            text: 'Lorem ipsum dolor, sit amet',
            pubDate: '17.03.2022',
        },
        {
            id: 1,
            title: '4 News Title',
            text: 'Lorem ipsum dolor, sit amet',
            pubDate: '17.03.2022',
        },
        {
            id: 1,
            title: '5 News Title',
            text: 'Lorem ipsum dolor, sit amet',
            pubDate: '17.03.2022',
        },
        {
            id: 1,
            title: '6 News Title',
            text: 'Lorem ipsum dolor, sit amet',
            pubDate: '17.03.2022',
        },
    ]


    return (
        <div>
            <Header />
            <div className="newsField">
            {
            newsArr.map((item:Person) => {
                return (
                    <div className="card" key={item.id}>
                        <div className="cardBody">
                            <a href="#"> <img alt="news img" /></a>
                            <div className="cardInfo">
                                <ul>
                                    <li> <h3> {item.title}</h3></li>
                                    <li> <span>{item.text}</span></li>
                                    <li> <span>{item.pubDate}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
<Footer/>
        </div>
    )
}