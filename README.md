## Part 1: React Router Dog Finder
Build an app that routes to different dogs and displays information on that dog when you’re at that route.

The routes should look like this:

`/dogs` is the homepage and shows all three dogs

Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to `/dogs/whiskey`.
every other endpoint not listed should redirect you to /dogs.



### Recommended Structure
You can preload the `<App />` component with the following defaultProps for convenience:


    App.defaultProps = {
    dogs: [
        {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
        },
        {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
        },
        {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
        },
        {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
            "Tubby is really stupid.",
            "Tubby does not like walks.",
            "Angelina used to hate Tubby, but claims not to anymore."
        ]
        }
    ]
    }
The `<App />` should render:

a `<Nav />` component with the dogs’ names passed as props
a `<Switch>` with your `<Route />` declarations
Here is an Example Snippet from the render method of `<App /> `To Get You Started:

    return (
    <Switch>
        <Route exact path="/dogs" >
        <DogList /> // what props will this need?
        </Route>
        <Route path="/dogs/:name" >
        <DogDetails /> // what props will this need?
        </Route>
        <Redirect to="/dogs" />
    </Switch>
    );
In this example:

`<DogList />` takes all the dog info from the props of `<App />`
`<DogDetails />` shows all of the info about a single dog
In `<DogDetails />`, how will you derive the current dog, e.g. whiskey?
Bonus: is there a way to get the current dog before you render the component, passing dog instead of the entire list of dog data?