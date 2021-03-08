import React, { useState } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const addAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const displayAuthors = (props) => {
    let data = props.data;
    if (data.loading) {
        return <option disabled>Loading authors</option>;
    } else {
        return data?.authors.map((author) => (
            <option key={author.id} value={author.id}>
                {author.name}
            </option>
        ));
    }
};

const AddBook = (props) => {
    return (
        <form id="add-book">
            <div className="field">
                <label>Book Name</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author</label>
                <select>{displayAuthors(props)}</select>
                <button>+</button>
            </div>
        </form>
    );
};

export default graphql(addAuthorsQuery)(AddBook);
