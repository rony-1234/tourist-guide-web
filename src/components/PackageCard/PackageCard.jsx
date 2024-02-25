import { useEffect, useState } from "react";
import PackCard from "../PackCard/PackCard";


const PackageCard = () => {

    const [packages,setPackage] = useState([])

    useEffect(()=>{
        fetch('https://tourist-guide-server-dt1xay8ue-rony-1234s-projects.vercel.app/tour')
        .then(res => res.json())
        .then(data =>{
            setPackage(data)
        })
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                packages?.map(pack =><PackCard key={pack.id} pack={pack}></PackCard>)
            }
        </div>
    );
};

export default PackageCard;