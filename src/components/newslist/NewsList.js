import React, {useEffect, useState} from 'react';
import NewsItem from '../newsitem/NewsItem';

function NewsList() {

    const url = 'http://hn.algolia.com/api/v1/search?tags=front_page';

    const [newsHits, setNewsHits] = useState({hits: []});
    // const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetchNewsList().then(data => setNewsHits(data));
    }, []);

    const fetchNewsList = async(page) => {
        const paging = page ? `&page=${page}` : '',
            response = await fetch(url + paging),
            data = await response.json();

        return data;
    };

    const showData = () => {
        console.log(newsHits);
    }

    return (
        
        <section>
            <button onClick={showData}>data</button>
            {newsHits.hits.length > 0 &&
                newsHits.hits.map((hitItem) => (
                    <NewsItem {...hitItem} key={hitItem.objectID} />
                ))
            }
        </section>
    )
}

export default NewsList
