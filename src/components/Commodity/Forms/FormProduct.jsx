import React from 'react';
import s from './Form.module.css';
import { useState } from "react";
import Preloader from '../../common/Preloader/Preloader';

const FormProduct = props => {

  const fileInput = React.createRef();
  const [state, setState] = useState({ ...props.formData, allow_edit: false });
  let parentId = state.parent_id === null ? '0' : state.parent_id;

  const formatPrice = price => {
    return isFinite(price) ? Number(price).toFixed(2) : '0.00';
  }

  const handleChange = (ev) => {
    
    let name = ev.target.name;
    if (name === 'picture') {
      let photo = fileInput.current.files[0].name;
      setState({ ...state, photo });
      return;
    }
    let value = ev.target.value;
    if (name === 'price' || name === 'cost_price') {
      value = Number(value);
    }
    if (name === 'allow_edit') {
      let form = document.getElementById(s['form-product']);
      Object.values(form.elements).forEach(item => {
        if (item.disabled && item.id !== s.uuid) item.removeAttribute('disabled');
      })
      form.allow_edit.parentNode.remove();
    }
    setState({ ...state, [name]: value });
  }

  const handleBlur = ev => {
    let name = ev.target.name;
    let value = ev.target.value;
    if (name === 'price' || name === 'cost_price') {
      value = isFinite(value) ? Number(value) : 0;
    }
    setState({ ...state, [name]: value });
    ev.target.value = formatPrice(value);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (window.confirm('Save changes')) {
      let body = { ...state, id: null };
      for (let key in body) {
        if (body[key] === null || !body[key]) {
          delete body[key];
        }
      }
      // delete body.id;
      delete body.createdAt;
      delete body.updatedAt;
      delete body.allow_edit;

      alert(JSON.stringify(body, null, 2));
      props.postFormData('product', body);
      props.toggleFormPost(true);
    } else {
      props.setViewForm(false);
    }
    document.body.style.overflow = 'auto';
  }

  const canselClick = (ev) => {
    props.setViewForm(false);
  }

  const handleKeyDown = ev => {
    console.log(ev.key + ' : ' + ev.code)
  }

  // let photo = state.photo ? state.photo : 'image3D.png';
  if (props.postForm) {
    return <Preloader />
  } else {
    return (
      <>
        <form id={s['form-product']} onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
          <fieldset name='Product'>
            <legend>Product Info</legend>
            <div>
              <b>ID: </b><input id={s.uuid} value={state.id} disabled />
              <label>
                Allow Edit:
            <input type='checkbox' id={s['allow-edit']} name={'allow_edit'} checked={state.allow_edit} onChange={handleChange} />
              </label>
            </div>
            <img id={s.picture} src={`http://localhost:5000/images/Price/${state.photo || 'image3D.png'}`} alt="no" />
            {
              state.photo || !state.allow_edit ? null :
                <input type="file" name="picture" id={s.picture} onChange={handleChange} ref={fileInput} />
            }
            <fieldset name='img_barcodes'>
              <legend>Barcodes</legend>
              <div className={s.barcodes}>
                <ul>
                  {state.barcodes.map(b => {
                    return (<li key={b}>{b}</li>)
                  })}
                </ul>
              </div>
            </fieldset>
            <div className={s.code_article}>
              <label>
                Code:
              <input type="text" name="code" value={state.code} onChange={handleChange} disabled={!state.allow_edit} />
              </label>
              <label>
                Aticle:
              <input type="text" name='article' value={state.article || ''} 
              onChange={handleChange} disabled={!state.allow_edit} />
              </label>
              <label>
                Group:
                <select name="parent_id" id={s.group} value={parentId} onChange={handleChange} disabled={!state.allow_edit}>
                  <option key='0' value='0'>Root</option>
                  {props.groups.map(g => {
                    return <option key={g.id} value={g.id}>{g.label}</option>
                  })}
                </select>
              </label>
              <label>
                Measure name:
              <input type="text" name='measure_name' value={state.measure_name || ''} onChange={handleChange} disabled={!state.allow_edit} />
              </label>
            </div>
            <label>
              Name:
              <textarea type="text" name="name" value={state.name} onChange={handleChange} disabled={!state.allow_edit} />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={state.description || ''} onChange={handleChange} disabled={!state.allow_edit} />
            </label>
            <div className={s.prices}>
              <label>
                Price:
              <input name="price" defaultValue={formatPrice(state.price)} onBlur={handleBlur} disabled={!state.allow_edit} /> руб.
            </label>
              <label>
                Cost price:
              <input name="cost_price" defaultValue={formatPrice(state.cost_price)} onBlur={handleBlur} disabled={!state.allow_edit} /> руб.
            </label>
              <label>
                Allow to sell:
              <input type="checkbox" name="allow_to_sell" defaultChecked={state.allow_to_sell} disabled={!state.allow_edit} />
              </label>
            </div>
          </fieldset>
          <input type="submit" value="Ready" />
          <button id={s.cansel} onClick={canselClick}>Cansel</button>
        </form>
      </>
    );
  }
}
export default FormProduct;
