import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function UserForm(props) {
    const {show,setShow,selectId,formData,roleId,roles,setRoleId,handleAdd,handleEdit,handleChange,handleImage} = props;
    return(
       <Modal show={show} onHide={()=>{setShow(false)}} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectId? <span> Edit User</span> : <span> Add User</span>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="name">name</span>
            <input type="text" class="form-control" required name='name'
            onChange={handleChange} value={formData?.name}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="email">email</span>
            <input type="email" class="form-control" required name='email'
            onChange={handleChange} value={formData?.email}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="phone">phone</span>
            <input type="text" class="form-control" required name='phone'
            onChange={handleChange} value={formData?.phone}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="password">password</span>
            <input type="password" class="form-control" required name='password'
            onChange={handleChange} value={formData?.password}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example"
          onChange={(e)=>{setRoleId(e.target.value)}} value={roleId}>
            {roles.map((role,index)=>{
              return(
                <option value={role.id}>{role.name}</option>
              )
            })}
          </select>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="image">image</span>
            <input type="file" class="form-control" required name='image'
            onChange={handleImage}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' 
          onClick={(e) => {selectId? handleEdit(e,selectId):handleAdd(e)}}>
            {selectId? <span> Edit User</span> : <span> Add User</span>}
          </Button>
        </Modal.Footer>
      </Modal>
    )
}