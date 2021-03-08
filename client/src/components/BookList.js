import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const displayBooks = (props) => {
    let data = props.data;
    if (data.loading) {
        return <div>Loading books...</div>;
    } else {
        return data?.books.map((book) => <li key={book.id}>{book.name}</li>);
    }
};

const BookList = (props) => {
    return (
        <div>
            <ul id="book-list">{displayBooks(props)}</ul>
        </div>
    );
};

export default graphql(getBooksQuery)(BookList);
