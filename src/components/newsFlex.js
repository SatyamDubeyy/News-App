import NewsCard from "./newsCard";
import "./newsFlex.css"
import {useEffect,useState} from "react"
import Spinner from "./spinner";
import NandP from "./NandP";
import InfiniteScroll from "react-infinite-scroll-component";

function NewsFlex({keyword,modee}) {
    // 3b4eee476ce04b0585cd46f93508438d
    // const[loading,setLoading]=useState(true);
    
    //  data;
   
    
    // const[pdis,setPdis]=useState(true);
    // const[ndis,setNdis]=useState(false);
    
    // const[lengthOfdata,setDataLength]=useState(0);
    // function onNextClick()
    // {
    //     setLoading(true);
    //     setPage(page+1);
    //     setPdis(false);
    //     console.log(page,noOfPages)
    //     // if(page===noOfPages-1 && LastPageSize!=0)
    //     //  setIsLastPage(true);
    //     // if(page===noOfPages || (page===noOfPages-1 && LastPageSize==0))
    //     // setNdis(true);
    // }
    
    // function onPrevClick()
    // {
    //     setLoading(true);
    //     setNdis(false);
    //     if(setIsLastPage===true)
    //     setIsLastPage(false);
    //     setPage(page-1);
    //      if(page===2)
    //      setPdis(true);

    // }

    const[page,setPage]=useState(1);
    // console.log("NEWS FLex")
    let pageSize=21;
    let noOfPages=Math.floor(100/pageSize);
    let LastPageSize=100-noOfPages*pageSize;
    const[isLastPage,setIsLastPage]=useState(false);
    const [data,setData]=useState([]);
    const[hasMoredataa,setHasmoredata]=useState(true);
    let url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=1a6b2821ae7042e4a5a6ac4145ead6f4&page=${page}&pageSize=${(isLastPage)?LastPageSize:pageSize}`

   
    const fetchApiData = async (url) => {
        try {
            
            const res = await fetch(url);
            const dataa = await res.json();
            //setNoOfPages(Math.ceil(data.totalResults/pageSize));
            // setDataLength(dataa.totalResults);
          //  setLoading(false);
            console.log(url,data);
            console.log(page,noOfPages,"fetch")
            setData(data.concat(dataa.articles));
            //console.log(data.articles) 
            
           
        } catch (error) {
            console.log(error);
        }
    }
   

    useEffect(()=>{
         fetchApiData(url);
         
         //window.scrollTo(0, 0);
    },[url]);
    
    // if(data.length>=100)
    // setHasmoredata(false);  ----> always a bad idea to set state directly inside function(infinite render error)
 
        
        console.log(data.length,"is here");
        console.log(page,noOfPages)
        
        
    
    
    
    //nexxt.addEventListener("click",onNextClick);
    //onNextClick();
    function onNext(){
        setPage(page+1);
        console.log(page,noOfPages,"onnext")
        if(page==noOfPages){
        setIsLastPage(true);
        setHasmoredata(false);
        }
        // if(page===noOfPages){
        //  setIsLastPage(true);
        // // fetchApiData(url);
        //  setHasmoredata(false);
        // }
    }
    return (
        <div className="desFlex" id="crane">

        {/* {loading&&<Spinner/>} */}
       {/* <Spinner/> */}
       <InfiniteScroll
                dataLength={data.length}
                next={onNext}
                loader={<Spinner/>}
                hasMore={hasMoredataa}
                scrollThreshold={1}
                >
                
        <div className="news" >
            {
                data.map((element,id,arr) => {
                    return (
                        <NewsCard title={element.title} description={element.description} urlImage={element.urlToImage} urlContent={element.url} source={element.source.name} mode={modee} key={id}/>
                    )
                })
            }
        </div>
        {/* <NandP  Nonclick={onNextClick} Pdis={pdis} Ndis={ndis}/> */}
       {/* <NandP/> */}
        </InfiniteScroll> 
        {/* source={element.source.name} */}
        </div>
    )
}

export default NewsFlex;