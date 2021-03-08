import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//APOLLO CLIENT SETUP
const client = ApolloClient({
    uri: "http://localhost:4000/graphql",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Ninja's Reading List</h1>
                <BookList />
            </div>
        </ApolloProvider>
    );
}

export default App;
