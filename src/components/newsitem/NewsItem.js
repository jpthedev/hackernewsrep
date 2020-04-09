import React, { useState } from "react";
import {getHoursDifference} from '../../commons/Date'

function NewsItem(props) {
    const {
        title,
        url,
        author,
        num_comments,
        points,
        created_at
    } = props;

    const [hideHits, setHide] = useState(true);
    const [totalPoints, setPoints] = useState(points);

    const timeDiff = getHoursDifference(created_at);

    const hideHitItem = () => {
        setHide(false);
    }

    const incrementPoint = () => {
        setPoints(totalPoints + 1);
    }

    return (
        <React.Fragment>
        {hideHits &&
        <div className='news-item'>
            <div>{num_comments}</div>
            <div>{totalPoints} <button type="button" onClick={incrementPoint} >up</button></div>
            <div>
                <h3>{title}</h3>
                <p>
                    <a href="{url}">{url}</a>
                    by
                    <b>{author}</b>
                    {timeDiff} hours ago
                    <button type="button" onClick={hideHitItem} >[ hide ]</button>
                </p>
            </div>
        </div>
        }
        </React.Fragment>
    )
}

export default NewsItem
