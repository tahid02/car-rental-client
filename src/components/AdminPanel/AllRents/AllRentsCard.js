import { useState } from "react";

const center_item = {
    display: 'flex',
    alignItems: 'center'
}

const AllRentsCard = ({ serviceInfo, orderTime,rentStatus,_id }) => {
    const { type, price, description, imageURL } = serviceInfo;
    const [status, setStatus] = useState(rentStatus)
    console.log(serviceInfo, orderTime);


    const handleStatusChange = (status ) => {
        console.log(status);
        setStatus(status);

                    fetch(`https://evening-ocean-71187.herokuapp.com/statusUpdate/${_id}`,{
                        method:'PATCH',
                        headers: {'Content-Type': 'application/json'},
                        body:JSON.stringify({status})
                    })
                    .then(res => res.json())
                    .then( result => {
                        console.log(result);
                        if (result) {
                            console.log(' status updated successfully')
                        
                        }
                    })
                    .catch(err => console.log('status error',err))
    }

    return (
        <div className='container'>
            <div className="row shadow my-3">
                <div className="col d-flex flex-wrap" >
                    <div>
                        {
                        <img src={imageURL} alt="" style={{ width: '100px', height: '100px' }} />
                    }
                    </div>
                    
                
                <div className="col d-flex align-items-center" > <strong> {type} </strong> </div>
                <div className="col d-flex align-items-center">  ${price} </div>
                <div className="col d-flex align-items-center"> {orderTime} </div>
                {/* className={ status==='pending' ? 'form-select btn btn-danger' : status === 'ongoing' ? ' form-select btn btn-info' : status === 'done' && ' form-select btn btn-success'} */}
                <select
                    className={status === "Pending" ? "btn btn-danger p-0" : status === "Done" ? "btn btn-success p-0" : "btn btn-info p-0" }
                    defaultValue={status}
                    style={{padding:'0px',height:'40%',width:''}}
                    onChange={e => handleStatusChange( e.target.value)}>
                    <option className="bg-danger  text-dark">Pending</option>
                    <option className="bg-info  text-dark">On going</option>
                    <option className="bg-success  text-dark">Done</option>
                </select>
                </div>
            </div>


        </div>
    );
};

export default AllRentsCard;