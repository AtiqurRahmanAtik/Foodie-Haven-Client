
import photo from "../../../../src/assets/home/featured.jpg";
import './setMenu.css'

const FormMenu = () => {


    return (
   
          
            <div className="my-11">

               
                <h1 className="text-center font-bold text-3xl">Set Menu</h1>


<div className="hero  bg-base-200  min-h-screen setMenu" >

  <div className="hero-content p-7 flex lg:flex-row">
        
        <div className="w-2/4">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
    
    <div className="w-2/4 space-y-4">
      <h3 className="text-2xl font-bold">March 20, 2023
</h3>
      <h2 className="py-6">WHERE CAN I GET SOME?
</h2>

        <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, eos. Maiores eos voluptatibus nostrum, quibusdam iusto ut totam in, aspernatur dignissimos quisquam corporis optio, quod magni error aliquam? Quod, accusantium.</p>

        
        <button className="btn btn-outline btn-accent border-0 border-y-4 text-white">Accent</button>
    </div>
  </div>
</div>
            </div>
            
     
    );
};

export default FormMenu;