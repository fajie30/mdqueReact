import Header from '../Layout/Head';
import ManageUser from '../Managements/ManageUser';
export function Dashboard(){
    return(
        <>
            <Header pageTitle="Dashboard Overview" />
        </>
    );
}
export function User(){
    return(
        <>
            <Header pageTitle="Manage Users" />
            <ManageUser />
        </>
    );
}

