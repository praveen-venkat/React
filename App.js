//   const header = document.createElement('h1'); header.innerHTML = 'Welcome toNamaste Chennai!!!!'; 
//   const root = document.getElementById('root');
//   root.append(header);

const heading = React.createElement("h1",
{class:'parent'},
React.createElement("h1",{class:'child'},
[React.createElement("h1",{class:'innerChild'},"Hello from inner child1"),React.createElement("h1",{class:'innerChild2'},"Hello from inner child2")]
));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);