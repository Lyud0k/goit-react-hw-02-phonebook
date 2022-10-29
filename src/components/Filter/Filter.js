import css from 'components/Filter/Filter.module.css';
import React from 'react';

export class Filter extends React.Component {
    state = {
filter: '',
    }

  findContacts = evt => {
    this.setState({
      filter: evt.target.value,
    });
    };
    
    render() {
        return (
                      <div className={css.boxDown}>
            {/* <h2 className={css.textDown}>Contacts</h2> */}
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
        )
    }
}