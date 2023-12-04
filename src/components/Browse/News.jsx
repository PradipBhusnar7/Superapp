import { useEffect, useState } from "react"
import './news.css'

const News = ()=>{
    const [news, setNews] = useState('')
     const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    console.log(news)
    useEffect(()=>{
        const fetchNews = async()=>{
           await fetch("https://newsapi.org/v2/everything?q=apple&from=2023-12-02&to=2023-12-02&sortBy=popularity&apiKey=b135ca8377234772b7bb35b329783eda")
                .then(async(data)=>await data.json()).then((res)=>setNews(res.articles[0]))
        }
        fetchNews();
    },[])
    
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
            <img src={news.urlToImage} style={{height:"422px", borderRadius:"12px",width:"443px"}}/>
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