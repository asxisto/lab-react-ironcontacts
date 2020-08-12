import React, { Component } from 'react';
import contacts from './../contacts.json';
import './IronTable.css';

export class IronTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: contacts.slice(0, 5),
    };
  }

  addContact = () => {
    const newContact =
      contacts[Math.floor(Math.random() * (contacts.length - 6 + 1) + 6)];
    // console.log(newContact);
    const list = [...this.state.contactData, newContact];

    this.setState({
      contactData: list,
    });
  };

  sortName = () => {
    const list = [...this.state.contactData];
    list.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    this.setState({
      contactData: list,
    });
  };

  sortPopularity = () => {
    const list = [...this.state.contactData];
    list.sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1;
    });
    this.setState({
      contactData: list,
    });
  };

  deleteContact = () => {
    const list = [...this.state.contactData];
    list.pop();
    this.setState({
      contactData: list,
    });
  };

  render() {
    const contactsList = this.state.contactData.map((person) => (
      <tr key={person.id}>
        <td>
          <img
            className="contactPicture"
            src={person.pictureUrl}
            alt={person.name}
          />
        </td>
        <td>{person.name}</td>
        <td>{Math.round(person.popularity * 100) / 100}</td>
        <td>
          <button onClick={this.deleteContact}>Delete</button>
        </td>
      </tr>
    ));
    return (
      <div>
        <button onClick={this.addContact}>Add Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{contactsList}</tbody>
        </table>
      </div>
    );
  }
}

export default IronTable;
