export default function UsersTable(props) {
    const {usersData,showEdit,handleDelete} = props
    return(
        <>
        <table class="table table-striped">
          <thead>
          <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">phone</th>
          <th scope="col">action</th>
          </tr>
          </thead>
  <tbody>
    {usersData?.map((user,index)=>{
        return(
            <tr>
      <td>{user.photo}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <a className='btn btn-danger m-2' onClick={()=>{handleDelete(user.id)}}>Delete</a>
        <a className='btn btn-warning m-2' onClick={()=>{showEdit(user)}}>Edit</a>
      </td>
    </tr>

        )
    })}
    
  </tbody>
</table>
        </>
    )
}