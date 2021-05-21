const center_item = {
    display:'flex',
    alignItems:'center'
}
const RentsCard = ({serviceInfo,orderTime}) => {
    
    const {imageURL,price,type} = serviceInfo;
    return (
        <div className='container'>
            <div className="row shadow my-3">
                <div className="col">
                    {
                        <img src={imageURL} alt="" style={{ width: '100px', height: '100px' }} />
                    }
                </div>
                <div className="col d-flex align-items-center" > <strong> {type} </strong> </div>
                <div className="col d-flex align-items-center">  ${price} </div>
                <div className="col d-flex align-items-center"> {orderTime} </div>
            </div>
               

        </div>
    );
};

export default RentsCard;