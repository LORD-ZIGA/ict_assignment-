function App(){

return(

<div>

<nav>

<div className="logo">
Royal Portfolio
</div>

<ul>
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>
</ul>

</nav>

<section className="hero">

<div>

<h1>
Kolawole <span>Olagunwa</span> David
</h1>

<p>
Computer Science Student
</p>

<p>
Matric Number: <strong>25010306057</strong>
</p>

<button className="btn">
Explore My Portfolio
</button>

</div>

</section>

<section id="about">

<h2 className="title">
About Me
</h2>

<div className="card">

<p>

Hello! My name is <strong>Kolawole Olagunwa David</strong>.
I am a Computer Science student with a passion for software development,
web design, programming, and technology. I enjoy building modern,
responsive websites and continuously learning new technologies.

</p>

</div>

</section>

<section id="skills">

<h2 className="title">
Skills
</h2>

<div className="cards">

<div className="card">
<h3>HTML</h3>
<p>Building structured web pages.</p>
</div>

<div className="card">
<h3>CSS</h3>
<p>Creating responsive and modern interfaces.</p>
</div>

<div className="card">
<h3>JavaScript</h3>
<p>Interactive web applications.</p>
</div>

<div className="card">
<h3>React JSX</h3>
<p>Component-based UI development.</p>
</div>

</div>

</section>

<section id="projects">

<h2 className="title">
Projects
</h2>

<div className="cards">

<div className="card">
<h3>Portfolio Website</h3>
<p>A responsive personal portfolio website.</p>
</div>

<div className="card">
<h3>Java Calculator</h3>
<p>A desktop calculator using Java.</p>
</div>

<div className="card">
<h3>Student Management System</h3>
<p>Database project for managing student records.</p>
</div>

</div>

</section>

<footer>

<p>

© 2026 | Designed by
<strong> Kolawole Olagunwa David</strong>

</p>

</footer>

</div>

);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);