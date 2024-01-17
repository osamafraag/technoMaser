import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function UserForm(props) {
    const {show,setShow,selectId,formData,userRoles,roles,setRoleId,handleAdd,handleEdit,handleChange} = props;
    return(
       <Modal show={show} onHide={()=>{setShow(false)}} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectId? <span> Edit User</span> : <span> Add User</span>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">name</span>
            <input type="text" class="form-control" required name='name'
            onChange={handleChange} value={formData?.name}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">email</span>
            <input type="email" class="form-control" required name='email'
            onChange={handleChange} value={formData?.email}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">phone</span>
            <input type="text" class="form-control" required name='phone'
            onChange={handleChange} value={formData?.phone}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">password</span>
            <input type="password" class="form-control" required name='password'
            onChange={handleChange} value={formData?.password}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example"
          onChange={(e)=>{setRoleId(e.target.value)}} value={userRoles[0]?.id}>
            {roles.map((role,index)=>{
              return(
                <option value={role.id}>{role.name}</option>
              )
            })}
          </select>
          </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' 
          onClick={(e) => {selectId? handleEdit(e,selectId):handleAdd(); setShow(false) }}>
            {selectId? <span> Edit User</span> : <span> Add User</span>}
          </Button>
        </Modal.Footer>
      </Modal>
    )
}