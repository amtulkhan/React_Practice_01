const parent = React.createElement("div", {
    id: "parent",
    class: "heading"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "H1 Tag"),
        React.createElement("h2", {}, "H1 Tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, React.createElement("h1", {}, "H1 Tag"))
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
