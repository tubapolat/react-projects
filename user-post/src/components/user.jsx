import { Address } from "./address";

export const User = props => {
    const user = props.user;

    return (
        <div id="user">
            {user && <div id='userInfo'>
                <p>Hello, it is {user.name}</p>
                <p>My phone number is {user.phone}</p>
                <p>My nick name is {user.username}</p>
                <p>My website is {user.website}</p>

            </div>}
            <Address address={user.address} />
        </div>
    )
}