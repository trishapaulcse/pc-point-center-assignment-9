import { useEffect, useState } from "react";

const CustomerReview = () => {
    const [rReviews, setREviews] = useState([]);
    useEffect(() => {
        fetch('reviewdata.json')
            .then(res => res.json())
            .then(data => setREviews(data))
    }, [])
    return [rReviews, setREviews];
}
export default CustomerReview;