

const TitleSection = ({heading, subheading}) => {

    return (
        <div> 
            <h3 className="text-center text-xl text-[#D99904] ">{heading}</h3>
            <hr />     
            <p className="text-center text-3xl font-bold my-5">{subheading}</p>   
            <hr />
        </div>
    );
};

export default TitleSection;