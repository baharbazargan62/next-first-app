import Link from 'next/link';
import React from 'react'

function EventItem(props) {
    const {title,image,date,location,id}=props;
    const humanReadableDate= new Date(date).toLocaleString("en-US",{
    day : "numeric",
    month : "long",
    year : "numeric",
});
const formattedAddress=location.replace(",", "\n");
const exploreLink=`/events/${id}`
  return (
    <li>
    <img src={"/" + image} alt={title}/>
    <section>
    <div>
    <h2>{title}</h2>
    </div>
    <div>
        <time>{humanReadableDate}</time>
    </div>
    <div>
        <address>{formattedAddress}</address>
    </div>
    </section>
    <div>
        <Link href={exploreLink}>Explore Event</Link>
    </div>
    </li>
  )
}

export default EventItem;