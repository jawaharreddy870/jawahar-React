const heading = React.createElement('h1',{id:'Jawahar',className:"jawaclass"},'Hello world from app');
// console.log(heading);
const heading1 = React.createElement('h1',{id:'Jawahar',className:"jawaclass"},React.createElement('h2',{id:'Jawahar2',className:"jawaclass3"},'Heading 2'));
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading1)