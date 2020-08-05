import React from "react";
import s from './Form.module.css';

class FormProductChildren extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.formData
    let parentId = this.state.parent_id === null ? '0' : this.state.parent_id;
    this.state.parent_id = parentId;
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let price = this.state.price;
    let cost_price = this.state.cost_price;
    let formatPrice = price ? price.toFixed(2) : '0.00';
    let formatCostPrice = price ? cost_price.toFixed(2) : '0.00';

    this.setState({ ...this.state, price: formatPrice, cost_price: formatCostPrice });
    let form = document.forms[s['form-product']];
    form.name.focus();
  }


  handleChange(ev) {
    let name = ev.target.name;
    this.setState({ [name]: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (window.confirm('Save changes')) {
      let parentId = this.state.parent_id === '0' ? null : this.state.parent_id;
      this.props.setFormData({ ...this.state, parent_id: parentId });
    }

    this.props.setViewForm(false);
    document.body.style.overflow = 'auto';
  }

  render() {
    let barcodes = this.state.barcodes.map(b => {
      return (<li key={b}>{b}</li>)
    })
    let photo = this.state.photo ? this.state.photo : 'image3D.png';

    return (
      <>
        <form id={s['form-product']} onSubmit={this.handleSubmit}>
          <fieldset name='Product'>
            <legend>Product Info</legend>
            <div><b>ID: </b><code>{this.state.id}</code></div>
            <fieldset name='img_barcodes'>
              <legend>Barcodes</legend>
              <img src={`http://localhost:5000/images/Price/${photo}`} alt="no" />
              {/* <input type="file" name="picture" id={s.picture} ref={this.fileInput}/> */}
              <div className={s.barcodes}>
                <ul>
                  {barcodes}
                </ul>
              </div>
            </fieldset>
            <div className={s.code_article}>
              <label>
                Code:
              <input type="text" name="code" value={this.state.code} onChange={this.handleChange} disabled />
              </label>
              <label>
                Aticle:
              <input type="text" name='article' value={this.state.article || ''} onChange={this.handleChange} />
              </label>
              <label>
                Group:
                <select name="parent_id" id={s.group} value={this.state.parent_id} onChange={this.handleChange}>
                  <option key='0' value='0'>Root</option>
                  {this.props.groups.map(g => {
                    return <option key={g.id} value={g.id}>{g.label}</option>
                  })}
                </select>
              </label>
              <label>
                Measure name:
              <input type="text" name='measure_name' value={this.state.measure_name || ''} onChange={this.handleChange} />
              </label>
            </div>
            <label>
              Name:
              <textarea type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={this.state.description || ''} onChange={this.handleChange} />
            </label>
            <div className={s.prices}>
              <label>
                Price:
              <input name="price" value={this.state.price} onChange={this.handleChange} /> руб.
            </label>
              <label>
                Cost price:
              <input name="cost_price" value={this.state.cost_price} onChange={this.handleChange} /> руб.
            </label>
              <label>
                Allow to sell:
              <input type="checkbox" name="allow_to_sell" defaultChecked={this.state.allow_to_sell} />
              </label>
            </div>
          </fieldset>
          <input type="submit" value="Ready" />
        </form>
      </>
    );
  }
};



export default FormProductChildren;
