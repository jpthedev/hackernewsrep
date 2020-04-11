import React, {useEffect, useState} from 'react';
import NewsItem from '../newsitem/NewsItem';
import Header from '../header/Header';
import componentsData from '../../data/componentsData.json';
import { HACKER_NEWS } from '../../commons/constants'

function NewsList() {

    const url = componentsData.apiUrls.frontPage;

    const [newsHits, setNewsHits] = useState({hits: []});
    const [hitsSessionData, setHitsSessionData] = useState({});

    useEffect(() => {
        const hitsSessionData = getHitsSession() || {};
        
        setHitsSessionData(hitsSessionData);
        fetchNewsList().then(data => setNewsHits(data));
    }, []);

    const loadMore = () => {
        fetchNewsList(newsHits.page + 1).then(data => setNewsHits({...data, hits: [...newsHits.hits, ...data.hits] }));
    };

    const fetchNewsList = async(page) => {
        const paging = page ? `&page=${page}` : '',
            response = await fetch(url + paging),
            data = await response.json();

        return data;
    };

    const getHitsSession = () => {
        const sessionData = sessionStorage.getItem(HACKER_NEWS.SESSION_HITS);

        return JSON.parse(sessionData);
    }

    const setHitsSession = (objectID, key, value) => {

        const sessionDataHits = getHitsSession() || {};

        if (!sessionDataHits[objectID]) {
            sessionDataHits[objectID] = {};
        }

        sessionDataHits[objectID][key] = value;
        sessionStorage.setItem(HACKER_NEWS.SESSION_HITS, JSON.stringify(sessionDataHits));
    }

    return (
        
        <>
            <Header />
            {newsHits.hits.length > 0 &&
                newsHits.hits.map((hitItem) => (
                    <React.Fragment key={hitItem.objectID}>
                    { !hitsSessionData[hitItem.objectID] &&
                    <NewsItem 
                        {...hitItem}
                        labels={componentsData.labels}
                        setHitsSession={setHitsSession}
                    />
                    }
                    { hitsSessionData[hitItem.objectID] && !hitsSessionData[hitItem.objectID].hide &&
                        <NewsItem 
                            {...hitItem}
                            labels={componentsData.labels}
                            updatedPoints={hitsSessionData[hitItem.objectID].points}
                            setHitsSession={setHitsSession}
                        />
                    }
                   
                    </React.Fragment>
                ))
            }
            {newsHits.page + 1 < newsHits.nbPages &&
                <button type='button' className='primary-button' onClick={loadMore}>{componentsData.labels.moreLabel}</button>
            }
        </>
    )
}

export default NewsList
