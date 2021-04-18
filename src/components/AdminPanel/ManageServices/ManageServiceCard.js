const center_item = {
    display:'flex',
    alignItems:'center'
}

   

    
    const ManageServicesCard = ({service}) => {
        const { imageURL, type, price, description,_id } = service;

        const deleteProduct = (e, id) => {
            console.log(e.target.parentNode.parentNode, _id,type, price, imageURL)
    
            fetch(`https://evening-ocean-71187.herokuapp.com/delete/${id}`, {
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    console.log(data)
                    e.target.parentNode.parentNode.style.display = 'none';
                }
            })
        }
        return (
    
    
    
    
            <tr className=''>
                {/* <th scope="row">1</th> */}
                <td> {type}</td>
                <td>{price}</td>
                <td>
                    <button className="btn btn-success">edit</button>
                    <button className="btn btn-danger" onClick={(e) =>deleteProduct( e, _id)}>delete</button>
                </td>
            </tr>
    
    
    
        );
    };
    
    export default ManageServicesCard;