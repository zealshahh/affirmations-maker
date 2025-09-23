export default function About() { 
    return (
        <div className="mt-20 mx-auto bg-transparent p-6">
            <h1 className="flex justify-center text-5xl font-bold mb-6 text-cyan-800 text-center">
                About
            </h1>
            <div className="text-justify">
                <p className="text-cyan-900 text-2xl ml-125 mr-125">Hello! I made this little website to brush up on my coding skills as well as give myself some positivity when I need it. Hopefully if you're seeing this, it helps you as well! And if you want, connect with me on LinkedIn! </p>
                <a href="https://www.linkedin.com/in/zealshahh"
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-center mt-40"
>
<img src="/linkedin.png" alt="LinkedIn" className="w-25 h-16 mx-auto -mt-35" style={{ filter: "invert(23%) sepia(92%) saturate(6459%) hue-rotate(186deg) brightness(89%) contrast(90%)"}}/>
</a>
            </div>
        </div>
    )
}