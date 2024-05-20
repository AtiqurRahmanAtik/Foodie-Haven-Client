import { useEffect, useState } from "react";
import SaladItem from "../SaladItem/SaladItem";

const CeffRecomentdent = () => {

    const [Ceff, setCeff] = useState([]);

   


    useEffect(()=> {
    fetch('/Menu.json')
    .then(res => res.json())
    .then(data => {
        const saladItem = data.filter((item) => item.category ==='salad')
        setCeff(saladItem)
    });

    },[])



    return (
      <section>

        <h1 className="text-3xl font-bold text-center"> Ceff Recommitment Section : {Ceff.length}</h1>


          <div className="grid gap-5 lg:grid-cols-4 ">
            {
              Ceff.map((item) => <SaladItem key={item._id} item={item}></SaladItem>)
            }
          </div>


      </section>


      
    );
};

export default CeffRecomentdent;