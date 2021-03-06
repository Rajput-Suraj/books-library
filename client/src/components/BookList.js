import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

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
