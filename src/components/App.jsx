// import { render } from '@testing-library/react';
import css from 'components/App.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  formSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    // this.reset();
  };

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
  };

  findContacts = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  viewList = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  // this.setState({ contacts: [...this.state.contacts, this.state.number] });

  // reset = () => {
  //   this.setState({ contacts: [], name: '', value: '' });
  // };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <div className={css.boxAll}>
          <h1 className={css.textUp}>Phonebook</h1>
          <ContactForm />

          <h2 className={css.textDown}>Contacts</h2>
          <Filter />
          <ContactList />
        </div> */}

        <div className={css.boxAll}>
          <form onSubmit={this.formSubmit}>
            <div className={css.boxUp}>
              <h2 className={css.textUp}>Phonebook</h2>
              <div className={css.boxInput}>
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
              </div>
            </div>

            <div className={css.boxDown}>
              <h2 className={css.textDown}>Contacts</h2>
              <p>Find contacts by name:</p>
              <input
                name={this.state.filter}
                onChange={this.findContacts}
                type="text"
                // name={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />

              <ul>
                {this.viewList().map(({ name, number }) => {
                  // console.log(viewList);
                  return (
                    <li key={nanoid()}>
                      <span>{name}:</span>
                      <span> {number}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
