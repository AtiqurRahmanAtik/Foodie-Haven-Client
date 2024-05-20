import { Parallax, Background } from 'react-parallax';


const Cover = ({img,title,para}) => {


    return (


        <Parallax
        blur={{ min: -150, max: 115 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >


        <div>
            <div className="hero min-h-screen" >

  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-96 backdrop-contrast-125 border">
      <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
      <p className="mb-5"> {para}</p>
     
    </div>
  </div>
</div>
        </div>
    </Parallax>


       
    );
};

export default Cover;