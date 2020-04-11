import React, { useState } from 'react';
import { getHoursDifference } from '../../commons/Date';

function NewsItem(props) {
    const {
        title,
        url,
        author,
        num_comments,
        points,
        created_at,
        labels,
        objectID,
        setHitsSession,
        updatedPoints
    } = props;

    const [hideHits, setHide] = useState(true);
    const [totalPoints, setPoints] = useState(updatedPoints ? updatedPoints : points);

    const timeDiff = getHoursDifference(created_at);

    const hideHitItem = () => {
        setHide(false);
        setHitsSession(objectID, 'hide', true);
    }

    const getDomainName = (url) => {
        let path = new URL(url);

        return path.hostname;
    }

    const incrementPoint = () => {
        setPoints(totalPoints + 1);
        setHitsSession(objectID, 'points', totalPoints + 1);
    }

    return (
        <>
        {hideHits &&
        <div className='news-item-wrapper'>
            <section  className='news-item'>
            <div>{num_comments}</div>
            <div className='total-points'>
                {totalPoints}
                {totalPoints === points &&
                    <button type='button' aria-label={labels.upLabel} title={labels.upLabel} className='arrow-up' onClick={incrementPoint} >
                        <img alt={labels.upLabel} src='https://img.icons8.com/material/30/000000/sort-up--v2.png'/>
                    </button>
                }
            </div>
            <div className='article'>
                <h3>{title}</h3>
                <p className='desc'>
                    <a target='_blank' rel='noopener noreferrer' href={url}>({ url && getDomainName(url)})</a>
                    <span className=
                   'text-light'>{labels.byLabel}</span>
                    <span className='text-time'><b>{author}</b></span>
                    <span className='text-time'>{timeDiff}</span>
                    <span className='text-time'>{labels.hoursLabel}</span>
                    <span className='text-time'>{labels.agoLabel}</span>                      
                    <button className='secondary-button' type='button' onClick={hideHitItem} >[ {labels.hideLabel} ]</button>
                </p>
            </div>
            </section>
        </div>
        }
        </>
    )
}

export default NewsItem
