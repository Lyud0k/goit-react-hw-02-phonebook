import css from 'components/ContactForm/ContactForm.module.css';
import React from 'react';

export class ContactForm extends React.Component {
    state = {
    contacts: [],
    // filter: '',
    name: '',
    number: '',
    }


  proverka = evt => {
    this.setState({ name: evt.target.value });
    // this.setState({ number: evt.target.value });
  };

  numberValue = evt => {
    this.setState({ number: evt.target.value });
  };

  clickPr = () => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, number: this.state.number },
      ],
    });
    this.props.onClick(this.state);
  };

    formSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    // this.reset();
  };
 
    render() {
      return (
          
          <div className={css.boxInput}>
            <form onSubmit={this.formSubmit}>
                <label htmlFor="">
                  Name:
                  <input
                    name="name" 
                    onChange={this.proverka}
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </label>
                <label htmlFor="">
                  Number:
                  <input
                    type="tel"
                    onChange={this.numberValue}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
            </label>
          
                <button type="submit" onClick={this.clickPr}>
                  Add contact
            </button>
           </form>
          </div>
          
        )
    }
}