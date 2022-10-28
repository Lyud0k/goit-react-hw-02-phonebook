// import { render } from '@testing-library/react';
import css from 'components/App.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  proverka = evt => {
    this.setState({ name: evt.target.value });
    // this.setState({ number: evt.target.value });
    // this.setState({
    //   contacts: [...this.state.contacts, this.state.name],
    // });
  };
  numberValue = evt => {
    this.setState({ number: evt.target.value });
  };
  clickPr = () => {
    this.setState({
      contacts: [...this.state.contacts, this.state.name, this.state.number],
    });
    // this.setState({ contacts: [...this.state.contacts, this.state.number] });
  };

  // reset = () => {
  //   this.setState({ contacts: [], name: '', value: '' });
  // };

  formSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    // this.reset();
  };
  render() {
    // const tel = (
    //   <p>
    //     {this.state.name}:{this.state.number}
    //   </p>
    // );
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
                    // name={this.state.name}
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
            <h2 className={css.textDown}>Contacts</h2>
            <ul>
              {this.state.contacts.map(name => {
                // const ne = <p>{contact}:</p>;
                // const te = <p>{contact}</p>;
                // const teg = <p>{contact}</p>;
                console.log(this.state.contacts);
                return (
                  <li key={nanoid()}>
                    {name}
                    {/* {teg} */}
                  </li>
                );
              })}
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
