import { useEffect, useState } from "react"
import './news.css'

const News = ()=>{
    const [news, setNews] = useState('')
     const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    console.log(news)
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    "https://api.currentsapi.services/v1/latest-news?language=en&apiKey=CRuQox3hcaPDKJKgCRRY14aVWRa1zROlHEJy-4PV05jBhZ6h"
                );
                const data = await response.json();
                setNews(data.news && data.news.length > 0 ? data.news[0] : null);
            } catch (error) {
                console.error("Error fetching news data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);
    
     useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; 
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const erasedToday = dd + '-' + mm + '-' + yyyy;
        setDate(erasedToday)
    })
    return (
        <div className="newContainer">
            <img src={news.image} style={{height:"424px", borderRadius:"12px 12px 0px 0px",width:"380px"}}/>
            <div className="newdesc">
                {news.description}
            </div>
            <div className="time">
                <p style={{color:"white",fontSize:"1.5rem",marginBottom:"10px"}}>{news.title}</p>
                <span style={{color:"white",fontSize:"1.3rem",marginRight:"10px",}}>{date}</span>
                <span style={{color:"white",fontSize:"1.3rem",marginRight:"10px",}}>{time}</span>
            </div>
        </div>
    )
}

export default News