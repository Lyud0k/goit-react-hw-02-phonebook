// import { render } from '@testing-library/react';
import css from 'components/App.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // formSubmit = evt => {
  //   evt.preventDefault();
  //   console.log(this.state);
  //   this.reset();
  // };

  moveSubmit = data => {
    console.log(data);
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

  reset = () => {
    this.setState({ name: '', number: '' });
  };

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
        {/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}

        <div className={css.boxAll}>
          <div className={css.boxUp}>
            <h1 className={css.textUp}>Phonebook</h1>
            <ContactForm onSubmit={this.moveSubmit} onClick={this.viewList} />
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
          </div>
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
      </div>
    );
  }
}
