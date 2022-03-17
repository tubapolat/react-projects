export const Address = props => {
    const address = props.address;
    return <div id='address'>
        {address && <div >
            <p>My address is {address.suite}, {address.street}, 
            {address.city}, zipcode: {address.zipcode}</p>
        </div>}
    </div>;
}