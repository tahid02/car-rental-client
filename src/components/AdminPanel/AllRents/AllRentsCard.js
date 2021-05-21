import { useState } from "react";

const center_item = {
    display: 'flex',
    alignItems: 'center'
}
const AllRentsCard = ({ serviceInfo, orderTime }) => {
    const { type, price, description, imageURL, _id } = serviceInfo;
    const [status, setStatus] = useState('pending')
    console.log(serviceInfo, orderTime);


    const handleStatusChange = (id,status ) => {
        console.log(id,status)
    }

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
                {/* className={ status==='pending' ? 'form-select btn btn-danger' : status === 'ongoing' ? ' form-select btn btn-info' : status === 'done' && ' form-select btn btn-success'} */}
                <select
                    className={status === "Pending" ? "btn btn-danger" : status === "Done" ? "btn btn-success" : "btn btn-info"}
                    defaultValue={status}
                    onChange={e => handleStatusChange(_id, e.target.value)}>
                    <option className="bg-white text-muted">Pending</option>
                    <option className="bg-white text-muted">On going</option>
                    <option className="bg-white text-muted">Doe</option>fire
                </select>
            </div>


        </div>
    );
};

export default AllRentsCard;