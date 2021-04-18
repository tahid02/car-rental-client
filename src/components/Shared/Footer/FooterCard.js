
const FooterCard = ({ title,data }) => {
    return (
        <div className="col-md-3 p-3">
             <h6 className="cyan">{title}</h6>
            {
                data.map( info => <div> <small className='mb-0 text-secondary'> {info}  </small> </div>  )
            }
        </div>
    );
};

export default FooterCard;