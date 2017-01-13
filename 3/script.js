/**
 * Created by user on 13.01.2017.
 */



var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif',
        address: "Medical 31-1",
        email: "email1@mail.ua"
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif',
        address: "Medical 31-2",
        email: "email2@mail.ua"
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'http://i.giphy.com/7ZwtPQtJALKIU.gif',
        address: "Medical 31-3",
        email: "email3@mail.ua"
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif',
        address: "Medical 31-4",
        email: "email4@mail.ua"
    }
];

var Contact = React.createClass({
    getInitialState : function () {
        return {
            hidden : true
        }
    },

    handleClick: function (event) {
        var hideEm = this.state.hidden ? false : true;
        this.setState({
            hidden: hideEm
        });
    },

    render: function() {
        return (
            <li className="contact" onClick={this.handleClick}>
                <img className="contact-image" src={this.props.image} width="60px" height="60px" />
                <div className="contact-info">
                    <div className="contact-name"> {this.props.name} </div>
                    <div className="contact-number"> {this.props.phoneNumber} </div>
                    <div className="contact-address" hidden={this.state.hidden}> {this.props.address} </div>
                    <div className="contact-email" hidden={this.state.hidden}> {this.props.email} </div>
                </div>
            </li>
        );
    }
});

var ContactsList = React.createClass({
    getInitialState: function() {
        return {
            displayedContacts: CONTACTS
        };
    },

    handleSearch: function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    },

    render: function() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function(el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                address={el.address}
                                email={el.email}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <ContactsList />,
    document.getElementById("content")
);