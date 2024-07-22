
const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"},[React.createElement("h1",{},"I'm in h1 tag"),React.createElement("h1",{},"I'm in h1 tag"),React.createElement("h1",{},"I'm in h1 tag")]))
console.log(parent);

//const heading = React.createElement("h1", {id :"heading",xyz:"abc"}, "Hello Worldfrom Recat");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);