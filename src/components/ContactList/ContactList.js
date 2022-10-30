import css from 'components/ContactList/ContactList.module.css';
import React from 'react';
import { render } from '@testing-library/react';
import { nanoid } from 'nanoid';

export class ContactList extends React.Component {
    state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
    }


  viewList = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );


    render() {
        return (
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
        )
    }
}